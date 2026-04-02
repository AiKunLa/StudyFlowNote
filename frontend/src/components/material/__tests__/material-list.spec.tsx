/**
 * Material List Tests
 *
 * Tests for the material list component:
 * - List rendering with materials
 * - Empty state
 * - Loading state
 * - Material selection
 * - Material deletion
 * - Search and filter
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MaterialList } from '../material-list'
import type { Material, MaterialType, MaterialStatus } from '@/services/material.service'

// Create mock functions
const mockFetchMaterials = vi.fn()
const mockDeleteMaterial = vi.fn()
const mockSetCurrentMaterial = vi.fn()
const mockClearError = vi.fn()

// Mock material store - must be called inside each test to get fresh mock
vi.mock('@/stores/material.store', () => ({
  useMaterialStore: vi.fn(() => ({
    materials: [] as Material[],
    isLoading: false,
    error: null as string | null,
    fetchMaterials: mockFetchMaterials,
    deleteMaterial: mockDeleteMaterial,
    setCurrentMaterial: mockSetCurrentMaterial,
    clearError: mockClearError,
  })),
}))

// Import after mock
import { useMaterialStore } from '@/stores/material.store'

describe('MaterialList', () => {
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
      status: 'PARSING' as MaterialStatus,
      parseError: null,
      metadata: null,
      createdAt: '2024-01-02T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
    },
  ]

  const defaultProps = {
    projectId: 'project-123',
    onSelectMaterial: vi.fn(),
    onAddMaterial: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('empty state', () => {
    it('should show empty state when no materials', () => {
      vi.mocked(useMaterialStore).mockReturnValue({
        materials: [] as Material[],
        isLoading: false,
        error: null,
        fetchMaterials: mockFetchMaterials,
        deleteMaterial: mockDeleteMaterial,
        setCurrentMaterial: mockSetCurrentMaterial,
        clearError: mockClearError,
      })

      render(<MaterialList {...defaultProps} />)
      expect(screen.getByText('暂无资料')).toBeInTheDocument()
    })

    it('should show call to action text', () => {
      vi.mocked(useMaterialStore).mockReturnValue({
        materials: [] as Material[],
        isLoading: false,
        error: null,
        fetchMaterials: mockFetchMaterials,
        deleteMaterial: mockDeleteMaterial,
        setCurrentMaterial: mockSetCurrentMaterial,
        clearError: mockClearError,
      })

      render(<MaterialList {...defaultProps} />)
      expect(screen.getByText('点击上方按钮添加第一个资料')).toBeInTheDocument()
    })
  })

  describe('loading state', () => {
    it('should show loading spinner when isLoading is true', () => {
      vi.mocked(useMaterialStore).mockReturnValue({
        materials: [] as Material[],
        isLoading: true,
        error: null,
        fetchMaterials: mockFetchMaterials,
        deleteMaterial: mockDeleteMaterial,
        setCurrentMaterial: mockSetCurrentMaterial,
        clearError: mockClearError,
      })

      render(<MaterialList {...defaultProps} />)
      expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
    })

    it('should not show empty state when loading', () => {
      vi.mocked(useMaterialStore).mockReturnValue({
        materials: [] as Material[],
        isLoading: true,
        error: null,
        fetchMaterials: mockFetchMaterials,
        deleteMaterial: mockDeleteMaterial,
        setCurrentMaterial: mockSetCurrentMaterial,
        clearError: mockClearError,
      })

      render(<MaterialList {...defaultProps} />)
      expect(screen.queryByText('暂无资料')).not.toBeInTheDocument()
    })
  })

  describe('error state', () => {
    it('should show error message when error exists', () => {
      vi.mocked(useMaterialStore).mockReturnValue({
        materials: [] as Material[],
        isLoading: false,
        error: 'Failed to fetch materials',
        fetchMaterials: mockFetchMaterials,
        deleteMaterial: mockDeleteMaterial,
        setCurrentMaterial: mockSetCurrentMaterial,
        clearError: mockClearError,
      })

      render(<MaterialList {...defaultProps} />)
      expect(screen.getByText('Failed to fetch materials')).toBeInTheDocument()
    })

    it('should show retry button when error exists', () => {
      vi.mocked(useMaterialStore).mockReturnValue({
        materials: [] as Material[],
        isLoading: false,
        error: 'Failed to fetch materials',
        fetchMaterials: mockFetchMaterials,
        deleteMaterial: mockDeleteMaterial,
        setCurrentMaterial: mockSetCurrentMaterial,
        clearError: mockClearError,
      })

      render(<MaterialList {...defaultProps} />)

      const retryButton = screen.getByText('重试')
      fireEvent.click(retryButton)

      expect(mockFetchMaterials).toHaveBeenCalledWith(defaultProps.projectId)
    })
  })

  describe('with materials', () => {
    beforeEach(() => {
      vi.mocked(useMaterialStore).mockReturnValue({
        materials: mockMaterials,
        isLoading: false,
        error: null,
        fetchMaterials: mockFetchMaterials,
        deleteMaterial: mockDeleteMaterial,
        setCurrentMaterial: mockSetCurrentMaterial,
        clearError: mockClearError,
      })
    })

    it('should render material cards when materials exist', () => {
      render(<MaterialList {...defaultProps} />)
      expect(screen.getByText('Test Material 1')).toBeInTheDocument()
      expect(screen.getByText('Test Material 2')).toBeInTheDocument()
    })

    it('should show search input', () => {
      render(<MaterialList {...defaultProps} />)
      expect(screen.getByPlaceholderText('搜索资料...')).toBeInTheDocument()
    })

    it('should show filter buttons', () => {
      render(<MaterialList {...defaultProps} />)
      expect(screen.getByText('全部')).toBeInTheDocument()
      // Filter buttons include 全部, PDF, 文档 (Markdown), 文本 (TEXT)
      const filterButtons = screen.getAllByRole('button')
      expect(filterButtons.length).toBeGreaterThanOrEqual(3)
    })

    it('should call onSelectMaterial when material is clicked', () => {
      render(<MaterialList {...defaultProps} />)

      fireEvent.click(screen.getByText('Test Material 1'))

      expect(defaultProps.onSelectMaterial).toHaveBeenCalledWith(mockMaterials[0])
    })

    it('should call deleteMaterial when delete button is clicked', () => {
      render(<MaterialList {...defaultProps} />)

      const deleteButtons = screen.getAllByTestId('delete-button')
      fireEvent.click(deleteButtons[0])

      expect(mockDeleteMaterial).toHaveBeenCalledWith(mockMaterials[0].id)
    })
  })
})