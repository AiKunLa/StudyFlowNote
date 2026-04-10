/**
 * MaterialPreviewDialog Tests
 *
 * Tests for the material preview dialog component:
 * - Dialog opens/closes correctly
 * - Markdown content is rendered
 * - Title displays correctly
 * - Empty/null content handling
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MaterialPreviewDialog } from '../material-preview-dialog'
import type { Material, MaterialType, MaterialStatus } from '@/services/material.service'

describe('MaterialPreviewDialog', () => {
  const createTestMaterial = (overrides?: Partial<Material>): Material => ({
    id: 'material-1',
    projectId: 'project-123',
    title: 'Test Material',
    type: 'MARKDOWN' as MaterialType,
    sourcePath: '/uploads/test.md',
    rawText: '# Hello World\n\nThis is a test document.',
    status: 'READY' as MaterialStatus,
    parseError: null,
    metadata: null,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    ...overrides,
  })

  const defaultProps = {
    material: null,
    open: false,
    onOpenChange: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('rendering', () => {
    it('should not render dialog when open is false', () => {
      render(<MaterialPreviewDialog {...defaultProps} open={false} />)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('should not render dialog when material is null', () => {
      render(<MaterialPreviewDialog {...defaultProps} open={true} material={null} />)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('should render dialog when open is true and material is provided', () => {
      const material = createTestMaterial()
      render(<MaterialPreviewDialog {...defaultProps} open={true} material={material} />)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('should display material title in dialog', () => {
      const material = createTestMaterial({ title: 'My Custom Title' })
      render(<MaterialPreviewDialog {...defaultProps} open={true} material={material} />)
      expect(screen.getByText('My Custom Title')).toBeInTheDocument()
    })
  })

  describe('markdown rendering', () => {
    it('should render markdown content', () => {
      const material = createTestMaterial({
        rawText: '# Hello World\n\nThis is a test.',
      })
      render(<MaterialPreviewDialog {...defaultProps} open={true} material={material} />)

      // Check that markdown content is rendered (react-markdown renders h1)
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
      expect(screen.getByText('Hello World')).toBeInTheDocument()
    })

    it('should render paragraphs in markdown', () => {
      const material = createTestMaterial({
        rawText: 'First paragraph.\n\nSecond paragraph.',
      })
      render(<MaterialPreviewDialog {...defaultProps} open={true} material={material} />)

      expect(screen.getByText('First paragraph.')).toBeInTheDocument()
      expect(screen.getByText('Second paragraph.')).toBeInTheDocument()
    })

    it('should render code blocks in markdown', () => {
      const material = createTestMaterial({
        rawText: '```\nconst x = 1;\n```',
      })
      render(<MaterialPreviewDialog {...defaultProps} open={true} material={material} />)

      // Code blocks are rendered inside <pre><code> elements
      const codeElement = document.querySelector('pre code')
      expect(codeElement).toBeInTheDocument()
      expect(codeElement).toHaveTextContent('const x = 1;')
    })

    it('should render lists in markdown', () => {
      const material = createTestMaterial({
        rawText: '- Item 1\n- Item 2\n- Item 3',
      })
      render(<MaterialPreviewDialog {...defaultProps} open={true} material={material} />)

      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
      expect(screen.getByText('Item 3')).toBeInTheDocument()
    })

    it('should render tables with remark-gfm', () => {
      const material = createTestMaterial({
        rawText: '| Header 1 | Header 2 |\n|----------|----------|\n| Cell 1   | Cell 2   |',
      })
      render(<MaterialPreviewDialog {...defaultProps} open={true} material={material} />)

      expect(screen.getByText('Header 1')).toBeInTheDocument()
      expect(screen.getByText('Cell 1')).toBeInTheDocument()
    })
  })

  describe('empty content handling', () => {
    it('should handle null rawText', () => {
      const material = createTestMaterial({ rawText: null })
      render(<MaterialPreviewDialog {...defaultProps} open={true} material={material} />)

      // Dialog should still open with material info, but no content
      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(screen.getByText('Test Material')).toBeInTheDocument()
    })

    it('should handle empty rawText', () => {
      const material = createTestMaterial({ rawText: '' })
      render(<MaterialPreviewDialog {...defaultProps} open={true} material={material} />)

      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(screen.getByText('Test Material')).toBeInTheDocument()
    })
  })

  describe('different material types', () => {
    it('should render TEXT type material', () => {
      const material = createTestMaterial({
        type: 'TEXT',
        rawText: 'Plain text content',
      })
      render(<MaterialPreviewDialog {...defaultProps} open={true} material={material} />)

      expect(screen.getByText('Plain text content')).toBeInTheDocument()
    })

    it('should render PDF type material (shows rawText)', () => {
      const material = createTestMaterial({
        type: 'PDF',
        rawText: 'Extracted PDF text content',
      })
      render(<MaterialPreviewDialog {...defaultProps} open={true} material={material} />)

      expect(screen.getByText('Extracted PDF text content')).toBeInTheDocument()
    })

    it('should render MARKDOWN type material', () => {
      const material = createTestMaterial({
        type: 'MARKDOWN',
        rawText: '## Markdown Title\n\n**Bold** text',
      })
      render(<MaterialPreviewDialog {...defaultProps} open={true} material={material} />)

      // Check that markdown heading is rendered - look for heading with Markdown Title text
      const markdownHeading = screen.getByText('Markdown Title')
      expect(markdownHeading).toBeInTheDocument()
      // Check it's a heading element
      expect(markdownHeading.tagName).toBe('H2')
      // Check bold text rendering
      expect(screen.getByText('Bold')).toBeInTheDocument()
    })
  })

  describe('special characters', () => {
    it('should handle unicode characters', () => {
      const material = createTestMaterial({
        rawText: '# 日本語テスト\n\nemoji: 🎉',
      })
      render(<MaterialPreviewDialog {...defaultProps} open={true} material={material} />)

      expect(screen.getByText('日本語テスト')).toBeInTheDocument()
      // Check that emoji is rendered as part of text
      expect(screen.getByText(/emoji: 🎉/)).toBeInTheDocument()
    })

    it('should handle special characters', () => {
      const material = createTestMaterial({
        rawText: 'Special chars: "quotes" and \'apostrophes\'',
      })
      render(<MaterialPreviewDialog {...defaultProps} open={true} material={material} />)

      expect(screen.getByText(/quotes/)).toBeInTheDocument()
      expect(screen.getByText(/apostrophes/)).toBeInTheDocument()
    })
  })
})
