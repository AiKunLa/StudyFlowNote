/**
 * UploadDialog - 上传资料对话框
 *
 * 功能：
 * - 选择文件类型（PDF、Markdown、纯文本）
 * - 输入资料标题
 * - 选择要上传的文件
 * - 上传资料到服务器
 */

import { useState, useCallback } from 'react';
import { useMaterialStore } from '@/stores/material.store';
import { useProjectStore } from '@/stores/project.store';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, FileText, X } from 'lucide-react';
import type { MaterialType } from '@/services/material.service';

interface UploadDialogProps {
  isOpen: boolean;
  onClose: () => void;
  projectId?: string;
}

const FILE_TYPES: { value: MaterialType; label: string; icon: string }[] = [
  { value: 'PDF', label: 'PDF', icon: '📄' },
  { value: 'MARKDOWN', label: 'Markdown', icon: '📝' },
  { value: 'TEXT', label: '纯文本', icon: '📃' },
];

export function UploadDialog({ isOpen, onClose, projectId }: UploadDialogProps) {
  const { uploading, uploadMaterial, error, clearError } = useMaterialStore();
  const { currentProject } = useProjectStore();

  const [title, setTitle] = useState('');
  const [fileType, setFileType] = useState<MaterialType>('PDF');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const effectiveProjectId = projectId || currentProject?.id;

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setValidationError(null);
    }
  }, []);

  const handleClearFile = useCallback(() => {
    setSelectedFile(null);
  }, []);

  const handleSubmit = useCallback(async () => {
    // Validate
    if (!title.trim()) {
      setValidationError('请输入资料标题');
      return;
    }
    if (!selectedFile) {
      setValidationError('请选择文件');
      return;
    }
    if (!effectiveProjectId) {
      setValidationError('项目 ID 无效');
      return;
    }

    setValidationError(null);

    try {
      await uploadMaterial({
        projectId: effectiveProjectId,
        title: title.trim(),
        type: fileType,
        file: selectedFile,
      });

      // Reset form and close
      setTitle('');
      setSelectedFile(null);
      setFileType('PDF');
      onClose();
    } catch {
      // Error is handled by the store
    }
  }, [title, selectedFile, effectiveProjectId, fileType, uploadMaterial, onClose]);

  const handleClose = useCallback(() => {
    // Reset form when closing
    setTitle('');
    setSelectedFile(null);
    setFileType('PDF');
    setValidationError(null);
    clearError();
    onClose();
  }, [onClose, clearError]);

  const displayError = validationError || error;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">上传资料</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* File Type Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">资料类型</label>
            <div className="flex gap-2">
              {FILE_TYPES.map((type) => (
                <label
                  key={type.value}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-colors
                    ${fileType === type.value
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:bg-gray-50'
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="fileType"
                    value={type.value}
                    checked={fileType === type.value}
                    onChange={(e) => setFileType(e.target.value as MaterialType)}
                    className="sr-only"
                  />
                  <span>{type.icon}</span>
                  <span className="text-sm">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Title Input */}
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-gray-700">
              资料标题
            </label>
            <Input
              id="title"
              placeholder="请输入资料标题"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setValidationError(null);
              }}
              disabled={uploading}
            />
          </div>

          {/* File Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">选择文件</label>
            <div className="flex items-center gap-2">
              <label
                className={`
                  flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-dashed cursor-pointer transition-colors
                  ${selectedFile
                    ? 'border-green-400 bg-green-50 text-green-700'
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                  }
                `}
              >
                <input
                  type="file"
                  data-testid="file-input"
                  className="sr-only"
                  onChange={handleFileChange}
                  disabled={uploading}
                  accept={
                    fileType === 'PDF'
                      ? '.pdf'
                      : fileType === 'MARKDOWN'
                        ? '.md,.markdown'
                        : '.txt,.text'
                  }
                />
                {selectedFile ? (
                  <>
                    <FileText className="w-5 h-5" />
                    <span className="text-sm font-medium">{selectedFile.name}</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-500">点击选择文件</span>
                  </>
                )}
              </label>
              {selectedFile && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handleClearFile}
                  disabled={uploading}
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Error Message */}
          {displayError && (
            <div className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">
              {displayError}
            </div>
          )}

          {/* Upload Progress */}
          {uploading && (
            <div className="flex items-center gap-2 text-sm text-blue-600">
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
              <span>上传中...</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            disabled={uploading}
          >
            取消
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={uploading}
          >
            {uploading ? '上传中...' : '开始上传'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}