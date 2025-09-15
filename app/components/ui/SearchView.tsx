import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const searchViewClasses = cva(
  'relative flex items-center transition-all duration-200 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border border-gray-300 bg-white rounded-md',
        filled: 'bg-gray-100 border border-gray-200 rounded-md',
        outline: 'border-2 border-gray-300 bg-transparent rounded-md',
      },
      size: {
        small: 'h-8',
        medium: 'h-10',
        large: 'h-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

interface SearchViewProps extends 
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onSubmit'>,
  VariantProps<typeof searchViewClasses> {
  // Optional parameters (no defaults)
  layout_gap?: string;
  layout_width?: string;
  padding?: string;
  position?: string;
  
  // Standard React props
  variant?: 'default' | 'filled' | 'outline';
  inputSize?: 'small' | 'medium' | 'large'; // Renamed from 'size'
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Custom onSubmit handler for search value */
  onSubmit?: (value: string) => void;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
}

const SearchView = ({
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  inputSize, // Renamed from 'size'
  placeholder = "Search...",
  value,
  onChange,
  onSubmit,
  className,
  leftIcon,
  rightIcon,
  disabled = false,
  size, // destructure and omit 'size' from props
  ...props
}: SearchViewProps) => {
  const [searchValue, setSearchValue] = useState(value || '');

  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit(searchValue);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && typeof onSubmit === 'function') {
      onSubmit(searchValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={twMerge('relative', optionalClasses)}>
      <div className={twMerge(searchViewClasses({ variant, size: inputSize }), className)}>
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}
        <input 
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          disabled={disabled}
          className={twMerge(
            'w-full bg-transparent outline-none text-gray-900 placeholder-gray-500',
            leftIcon ? 'pl-10' : 'pl-3',
            rightIcon ? 'pr-10' : 'pr-3',
            'py-2'
          )}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchView;