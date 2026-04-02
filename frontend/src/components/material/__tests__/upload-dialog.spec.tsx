/**
 * Upload Dialog Tests
 *
 * Tests for the upload dialog component:
 * - Dialog open/close behavior
 * - File selection
 * - Form validation
 * - Upload trigger
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UploadDialog } from '../upload-dialog'

// Mock the material store
const mockUploadMaterial = vi.fn()
const mockUseMaterialStore = vi.fn(() => ({
  uploading: false,
  uploadMaterial: mockUploadMaterial,
  error: null,
  clearError: vi.fn(),
}))
vi.mock('@/stores/material.store', () => ({
  useMaterialStore: () => mockUseMaterialStore(),
}))

// Mock the useProjectStore
vi.mock('@/stores/project.store', () => ({
  useProjectStore: vi.fn(() => ({
    currentProject: { id: 'project-123', name: 'Test Project' },
  })),
}))

describe('UploadDialog', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    projectId: 'project-123',
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('rendering', () => {
    it('should render dialog when isOpen is true', () => {
      render(<UploadDialog {...defaultProps} />)
      expect(screen.getByText('上传资料')).toBeInTheDocument()
    })

    it('should not render dialog when isOpen is false', () => {
      render(<UploadDialog {...defaultProps} isOpen={false} />)
      expect(screen.queryByText('上传资料')).not.toBeInTheDocument()
    })
  })

  describe('file type selection', () => {
    it('should show file type options', () => {
      render(<UploadDialog {...defaultProps} />)
      expect(screen.getByText('PDF')).toBeInTheDocument()
      expect(screen.getByText('Markdown')).toBeInTheDocument()
      expect(screen.getByText('纯文本')).toBeInTheDocument()
    })

    it('should have radio buttons for file types', () => {
      render(<UploadDialog {...defaultProps} />)
      const radios = screen.getAllByRole('radio')
      expect(radios.length).toBe(3)
    })
  })

  describe('title input', () => {
    it('should have empty title by default', () => {
      render(<UploadDialog {...defaultProps} />)
      const titleInput = screen.getByLabelText(/资料标题/)
      expect(titleInput).toHaveValue('')
    })

    it('should accept title input', async () => {
      const user = userEvent.setup()
      render(<UploadDialog {...defaultProps} />)

      const titleInput = screen.getByLabelText(/资料标题/)
      await user.type(titleInput, 'My Test Material')

      expect(titleInput).toHaveValue('My Test Material')
    })
  })

  describe('file selection', () => {
    it('should show file input', () => {
      render(<UploadDialog {...defaultProps} />)
      expect(screen.getByTestId('file-input')).toBeInTheDocument()
    })

    it('should show selected file name when file is chosen', () => {
      render(<UploadDialog {...defaultProps} />)
      const fileInput = screen.getByTestId('file-input')
      const file = new File(['content'], 'test.pdf', { type: 'application/pdf' })
      fireEvent.change(fileInput, { target: { files: [file] } })

      expect(screen.getByText('test.pdf')).toBeInTheDocument()
    })
  })

  describe('form validation', () => {
    it('should require title before upload', async () => {
      const user = userEvent.setup()
      render(<UploadDialog {...defaultProps} />)

      // Click upload without entering title
      const submitButton = screen.getByText('开始上传')
      await user.click(submitButton)

      expect(screen.getByText(/请输入资料标题/)).toBeInTheDocument()
    })

    it('should require file selection', async () => {
      const user = userEvent.setup()
      render(<UploadDialog {...defaultProps} />)

      const titleInput = screen.getByLabelText(/资料标题/)
      await user.type(titleInput, 'Test Title')

      const submitButton = screen.getByText('开始上传')
      await user.click(submitButton)

      expect(screen.getByText(/请选择文件/)).toBeInTheDocument()
    })
  })

  describe('upload submission', () => {
    it('should call uploadMaterial with correct params', async () => {
      const user = userEvent.setup()
      render(<UploadDialog {...defaultProps} />)

      const titleInput = screen.getByLabelText(/资料标题/)
      await user.type(titleInput, 'Test Material')

      const fileInput = screen.getByTestId('file-input')
      const file = new File(['content'], 'test.pdf', { type: 'application/pdf' })
      fireEvent.change(fileInput, { target: { files: [file] } })

      const submitButton = screen.getByText('开始上传')
      await user.click(submitButton)

      expect(mockUploadMaterial).toHaveBeenCalledWith(
        expect.objectContaining({
          projectId: 'project-123',
          title: 'Test Material',
          type: 'PDF',
          file: expect.any(File),
        }),
      )
    })

    it('should show upload button with correct text when not uploading', () => {
      render(<UploadDialog {...defaultProps} />)
      expect(screen.getByText('开始上传')).toBeInTheDocument()
    })
  })

  describe('dialog close', () => {
    it('should have cancel button', () => {
      render(<UploadDialog {...defaultProps} />)
      expect(screen.getByRole('button', { name: '取消' })).toBeInTheDocument()
    })
  })
})
