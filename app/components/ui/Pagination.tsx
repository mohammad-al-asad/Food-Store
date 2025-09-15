import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const paginationClasses = cva(
  'flex items-center justify-center space-x-1',
  {
    variants: {
      variant: {
        default: '',
        outlined: 'border border-gray-300 rounded-lg p-2',
        filled: 'bg-gray-50 rounded-lg p-2',
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const pageButtonClasses = cva(
  'flex items-center justify-center min-w-[40px] h-10 px-3 py-2 text-sm font-medium transition-all duration-200 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'text-gray-700 bg-white',
        active: 'text-white bg-green-500 border-green-500 hover:bg-green-600',
        disabled: 'text-gray-400 bg-gray-100 cursor-not-allowed',
      },
      shape: {
        square: 'rounded-md',
        rounded: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      shape: 'square',
    },
  }
);

interface PaginationProps extends VariantProps<typeof paginationClasses> {
  // Optional parameters (no defaults)
  layout_width?: string;
  margin?: string;
  position?: string;
  
  // Standard React props
  variant?: 'default' | 'outlined' | 'filled';
  size?: 'small' | 'medium' | 'large';
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  className?: string;
  disabled?: boolean;
  shape?: 'square' | 'rounded';
}

const Pagination = ({
  // Optional parameters (no defaults)
  layout_width,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  className,
  disabled = false,
  shape = 'square',
}: PaginationProps) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ');

  // Calculate visible page numbers
  const getVisiblePages = () => {
    const pages: number[] = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);
    
    // Adjust if we're near the beginning or end
    if (endPage - startPage + 1 < maxVisiblePages) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const handlePageClick = (page: number) => {
    if (disabled || page === currentPage || page < 1 || page > totalPages) return;
    
    if (typeof onPageChange === 'function') {
      onPageChange(page);
    }
  };

  const visiblePages = getVisiblePages();
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <nav 
      className={twMerge(paginationClasses({ variant, size }), optionalClasses, className)}
      aria-label="Pagination Navigation"
    >
      {/* First Page Button */}
      {showFirstLast && currentPage > 1 && (
        <button
          onClick={() => handlePageClick(1)}
          disabled={disabled || !canGoPrev}
          className={twMerge(
            pageButtonClasses({ 
              variant: disabled || !canGoPrev ? 'disabled' : 'default',
              shape 
            })
          )}
          aria-label="Go to first page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Previous Page Button */}
      {showPrevNext && (
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={disabled || !canGoPrev}
          className={twMerge(
            pageButtonClasses({ 
              variant: disabled || !canGoPrev ? 'disabled' : 'default',
              shape 
            })
          )}
          aria-label="Go to previous page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Ellipsis before visible pages */}
      {visiblePages[0] > 1 && (
        <>
          {visiblePages[0] > 2 && (
            <span className="px-3 py-2 text-gray-500">...</span>
          )}
        </>
      )}

      {/* Page Number Buttons */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          disabled={disabled}
          className={twMerge(
            pageButtonClasses({ 
              variant: page === currentPage ? 'active' : (disabled ? 'disabled' : 'default'),
              shape 
            })
          )}
          aria-label={`Go to page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      {/* Ellipsis after visible pages */}
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-3 py-2 text-gray-500">...</span>
          )}
        </>
      )}

      {/* Next Page Button */}
      {showPrevNext && (
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={disabled || !canGoNext}
          className={twMerge(
            pageButtonClasses({ 
              variant: disabled || !canGoNext ? 'disabled' : 'default',
              shape 
            })
          )}
          aria-label="Go to next page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Last Page Button */}
      {showFirstLast && currentPage < totalPages && (
        <button
          onClick={() => handlePageClick(totalPages)}
          disabled={disabled || !canGoNext}
          className={twMerge(
            pageButtonClasses({ 
              variant: disabled || !canGoNext ? 'disabled' : 'default',
              shape 
            })
          )}
          aria-label="Go to last page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </nav>
  );
};

export default Pagination;