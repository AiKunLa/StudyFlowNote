/**
 * Material Card Tests
 *
 * Tests for the material card component:
 * - Material info display
 * - Status badge display
 * - Delete action
 * - Click to select
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MaterialCard } from '../material-card'
import type { MaterialType, MaterialStatus } from '@/services/material.service'

describe('MaterialCard', () => {
  const defaultProps = {
    material: {
      id: 'material-1',
      projectId: 'project-123',
      title: 'Test Material',
      type: 'PDF' as MaterialType,
      sourcePath: '/uploads/test.pdf',
      rawText: null,
      status: 'READY' as MaterialStatus,
      parseError: null,
      metadata: null,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    onSelect: vi.fn(),
    onDelete: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('rendering', () => {
    it('should render material title', () => {
      render(<MaterialCard {...defaultProps} />)
      expect(screen.getByText('Test Material')).toBeInTheDocument()
    })

    it('should render material type icon', () => {
      render(<MaterialCard {...defaultProps} />)
      expect(screen.getByText('PDF')).toBeInTheDocument()
    })

    it('should render creation date', () => {
      render(<MaterialCard {...defaultProps} />)
      expect(screen.getByText('2024/1/1')).toBeInTheDocument()
    })
  })

  describe('status badge', () => {
    it('should show READY status for ready materials', () => {
      render(<MaterialCard {...defaultProps} />)
      expect(screen.getByText('就绪')).toBeInTheDocument()
    })

    it('should show UPLOADING status for uploading materials', () => {
      render(<MaterialCard {...defaultProps} material={{
        ...defaultProps.material,
        status: 'UPLOADING',
      }} />)
      expect(screen.getByText('上传中')).toBeInTheDocument()
    })

    it('should show PARSING status for parsing materials', () => {
      render(<MaterialCard {...defaultProps} material={{
        ...defaultProps.material,
        status: 'PARSING',
      }} />)
      expect(screen.getByText('解析中')).toBeInTheDocument()
    })

    it('should show FAILED status for failed materials', () => {
      render(<MaterialCard {...defaultProps} material={{
        ...defaultProps.material,
        status: 'FAILED',
      }} />)
      expect(screen.getByText('失败')).toBeInTheDocument()
    })
  })

  describe('actions', () => {
    it('should call onSelect when card is clicked', () => {
      render(<MaterialCard {...defaultProps} />)

      const card = screen.getByText('Test Material').closest('[class*="card"]')
      if (card) {
        fireEvent.click(card)
      } else {
        fireEvent.click(screen.getByText('Test Material'))
      }

      expect(defaultProps.onSelect).toHaveBeenCalledWith(defaultProps.material)
    })

    it('should call onDelete when delete button is clicked', async () => {
      render(<MaterialCard {...defaultProps} />)

      const deleteButton = screen.getByTestId('delete-button')
      fireEvent.click(deleteButton)

      expect(defaultProps.onDelete).toHaveBeenCalledWith(defaultProps.material.id)
    })
  })

  describe('type-specific rendering', () => {
    it('should show PDF icon for PDF type', () => {
      render(<MaterialCard {...defaultProps} material={{
        ...defaultProps.material,
        type: 'PDF',
      }} />)
      expect(screen.getByText('PDF')).toBeInTheDocument()
    })

    it('should show MD icon for Markdown type', () => {
      render(<MaterialCard {...defaultProps} material={{
        ...defaultProps.material,
        type: 'MARKDOWN',
      }} />)
      expect(screen.getByText('MD')).toBeInTheDocument()
    })

    it('should show TXT icon for Text type', () => {
      render(<MaterialCard {...defaultProps} material={{
        ...defaultProps.material,
        type: 'TEXT',
      }} />)
      expect(screen.getByText('TXT')).toBeInTheDocument()
    })
  })

  describe('selected state', () => {
    it('should show selected style when selected', () => {
      render(<MaterialCard {...defaultProps} isSelected={true} />)

      // Find the card element by its role
      const card = screen.getByRole('button', { name: /Test Material/i })
      expect(card).toHaveClass(/border-blue-500/)
    })

    it('should not show selected style when not selected', () => {
      render(<MaterialCard {...defaultProps} isSelected={false} />)

      const card = screen.getByRole('button', { name: /Test Material/i })
      expect(card).not.toHaveClass(/border-blue-500/)
    })
  })
})