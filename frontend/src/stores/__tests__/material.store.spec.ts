/**
 * Material Store Tests
 *
 * Tests for material state management including:
 * - Material list management
 * - Upload state management
 * - Material CRUD operations
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { act } from 'react'
import { renderHook } from '@testing-library/react'
import { useMaterialStore } from '../material.store'
import type { Material, MaterialType, MaterialStatus } from '@/services/material.service'

// Mock the material service
vi.mock('@/services/material.service', () => ({
  materialService: {
    upload: vi.fn(),
    list: vi.fn(),
    delete: vi.fn(),
    getStatus: vi.fn(),
  },
}))

import { materialService } from '@/services/material.service'

describe('MaterialStore', () => {
  const mockMaterials: Material[] = [
    {
      id: 'material-1',
      projectId: 'project-123',
      title: 'Test Material 1',
      type: 'PDF' as MaterialType,
      sourcePath: '/uploads/test1.pdf',
      rawText: null,
      status: 'READY' as MaterialStatus,
      parseError: null,
      metadata: null,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: 'material-2',
      projectId: 'project-123',
      title: 'Test Material 2',
      type: 'MARKDOWN' as MaterialType,
      sourcePath: null,
      rawText: '# Markdown content',
      status: 'UPLOADING' as MaterialStatus,
      parseError: null,
      metadata: null,
      createdAt: '2024-01-02T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
    },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('initial state', () => {
    it('should have empty materials array', () => {
      const { result } = renderHook(() => useMaterialStore())
      expect(result.current.materials).toEqual([])
    })

    it('should have null currentMaterial', () => {
      const { result } = renderHook(() => useMaterialStore())
      expect(result.current.currentMaterial).toBeNull()
    })

    it('should have isLoading as false', () => {
      const { result } = renderHook(() => useMaterialStore())
      expect(result.current.isLoading).toBe(false)
    })

    it('should have error as null', () => {
      const { result } = renderHook(() => useMaterialStore())
      expect(result.current.error).toBeNull()
    })
  })

  describe('fetchMaterials', () => {
    it('should set loading to true when fetching', async () => {
      vi.mocked(materialService.list).mockImplementation(() => new Promise(() => {}))

      const { result } = renderHook(() => useMaterialStore())

      act(() => {
        result.current.fetchMaterials('project-123')
      })

      expect(result.current.isLoading).toBe(true)
    })

    it('should set materials on successful fetch', async () => {
      vi.mocked(materialService.list).mockResolvedValue({
        data: {
          success: true,
          data: {
            items: mockMaterials,
            total: 2,
            page: 1,
            pageSize: 20,
          },
        },
      } as any)

      const { result } = renderHook(() => useMaterialStore())

      await act(async () => {
        await result.current.fetchMaterials('project-123')
      })

      expect(result.current.materials).toEqual(mockMaterials)
      expect(result.current.isLoading).toBe(false)
    })

    it('should set error on fetch failure', async () => {
      vi.mocked(materialService.list).mockRejectedValue(new Error('Network error'))

      const { result } = renderHook(() => useMaterialStore())

      await act(async () => {
        await result.current.fetchMaterials('project-123')
      })

      expect(result.current.error).toBe('获取资料列表失败')
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('uploadMaterial', () => {
    it('should set uploading to true when uploading', async () => {
      vi.mocked(materialService.upload).mockImplementation(() => new Promise(() => {}))

      const { result } = renderHook(() => useMaterialStore())

      act(() => {
        result.current.uploadMaterial({
          projectId: 'project-123',
          title: 'New Material',
          type: 'PDF',
        })
      })

      expect(result.current.uploading).toBe(true)
    })

    it('should add new material to list on successful upload', async () => {
      const newMaterial: Material = {
        id: 'material-3',
        projectId: 'project-123',
        title: 'New Material',
        type: 'PDF',
        sourcePath: null,
        rawText: null,
        status: 'UPLOADING',
        parseError: null,
        metadata: null,
        createdAt: '2024-01-03T00:00:00Z',
        updatedAt: '2024-01-03T00:00:00Z',
      }

      vi.mocked(materialService.upload).mockResolvedValue({
        data: { success: true, data: newMaterial },
      } as any)

      const { result } = renderHook(() => useMaterialStore())

      await act(async () => {
        await result.current.uploadMaterial({
          projectId: 'project-123',
          title: 'New Material',
          type: 'PDF',
        })
      })

      expect(result.current.materials).toContainEqual(newMaterial)
      expect(result.current.uploading).toBe(false)
    })

    it('should set error on upload failure', async () => {
      vi.mocked(materialService.upload).mockRejectedValue(new Error('Upload failed'))

      const { result } = renderHook(() => useMaterialStore())

      // Suppress console error for this test
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      await act(async () => {
        try {
          await result.current.uploadMaterial({
            projectId: 'project-123',
            title: 'New Material',
            type: 'PDF',
          })
        } catch {
          // Expected to throw
        }
      })

      consoleSpy.mockRestore()
      expect(result.current.error).toBe('上传资料失败')
      expect(result.current.uploading).toBe(false)
    })
  })

  describe('deleteMaterial', () => {
    it('should remove material from list on successful delete', async () => {
      vi.mocked(materialService.delete).mockResolvedValue({
        data: { success: true },
      } as any)

      const { result } = renderHook(() => useMaterialStore())

      // Set initial materials directly
      act(() => {
        result.current.materials = mockMaterials
      })

      await act(async () => {
        await result.current.deleteMaterial('material-1')
      })

      expect(result.current.materials.find(m => m.id === 'material-1')).toBeUndefined()
    })

    it('should set error on delete failure', async () => {
      vi.mocked(materialService.delete).mockRejectedValue(new Error('Delete failed'))

      const { result } = renderHook(() => useMaterialStore())

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      await act(async () => {
        try {
          await result.current.deleteMaterial('material-1')
        } catch {
          // Expected to throw
        }
      })

      consoleSpy.mockRestore()
      expect(result.current.error).toBe('删除资料失败')
    })
  })

  describe('setCurrentMaterial', () => {
    it('should set currentMaterial', () => {
      const { result } = renderHook(() => useMaterialStore())

      act(() => {
        result.current.setCurrentMaterial(mockMaterials[0])
      })

      expect(result.current.currentMaterial).toEqual(mockMaterials[0])
    })

    it('should clear currentMaterial when set to null', () => {
      const { result } = renderHook(() => useMaterialStore())

      act(() => {
        result.current.setCurrentMaterial(mockMaterials[0])
      })
      act(() => {
        result.current.setCurrentMaterial(null)
      })

      expect(result.current.currentMaterial).toBeNull()
    })
  })

  describe('clearError', () => {
    it('should clear error', async () => {
      vi.mocked(materialService.list).mockRejectedValue(new Error('Network error'))

      const { result } = renderHook(() => useMaterialStore())

      await act(async () => {
        await result.current.fetchMaterials('project-123')
      })

      expect(result.current.error).toBeTruthy()

      act(() => {
        result.current.clearError()
      })

      expect(result.current.error).toBeNull()
    })
  })

  describe('materials by project', () => {
    it('should filter materials by projectId', async () => {
      const projectMaterials = mockMaterials.filter(m => m.projectId === 'project-123')
      vi.mocked(materialService.list).mockResolvedValue({
        data: {
          success: true,
          data: {
            items: projectMaterials,
            total: 2,
            page: 1,
            pageSize: 20,
          },
        },
      } as any)

      const { result } = renderHook(() => useMaterialStore())

      await act(async () => {
        await result.current.fetchMaterials('project-123')
      })

      expect(result.current.materials).toHaveLength(2)
      expect(result.current.materials[0].projectId).toBe('project-123')
    })
  })
})