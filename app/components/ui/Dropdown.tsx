import React, { useState, useRef, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const dropdownClasses = cva(
  'relative inline-block text-left w-full',
  {
    variants: {
      variant: {
        default: '',
        filled: 'bg-gray-50',
        outlined: 'border-2',
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

const triggerClasses = cva(
  'w-full flex items-center justify-between px-3 py-2 cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-white border border-gray-300 hover:border-gray-400',
        filled: 'bg-gray-50 border border-gray-200 hover:bg-gray-100',
        outlined: 'bg-transparent border-2 border-gray-300 hover:border-gray-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface DropdownProps extends VariantProps<typeof dropdownClasses> {
  // Required parameters with defaults
  placeholder?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: 'left' | 'center' | 'right';
  text_color?: string;
  border_border?: string;
  border_border_radius?: string;
  
  // Optional parameters (no defaults)
  fill_background_color?: string;
  border_border_top?: string;
  layout_gap?: string;
  layout_width?: string;
  padding?: string;
  margin?: string;
  position?: string;
  
  // Standard React props
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  options?: DropdownOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  className?: string;
  disabled?: boolean;
  maxHeight?: string;
}

const Dropdown = ({
  // Required parameters with defaults
  placeholder = "Latest",
  text_font_size = "14",
  text_font_family = "Poppins",
  text_font_weight = "400",
  text_line_height = "21px",
  text_text_align = "left",
  text_color = "#4c4c4c",
  border_border = "1 solid #e6e6e6",
  border_border_radius = "4px",
  
  // Optional parameters (no defaults)
  fill_background_color,
  border_border_top,
  layout_gap,
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  options = [],
  value,
  onChange,
  className,
  disabled = false,
  maxHeight = "200px",
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Safe validation for optional parameters
  const hasValidBackgroundColor = fill_background_color && typeof fill_background_color === 'string' && fill_background_color.trim() !== '';
  const hasValidBorderTop = border_border_top && typeof border_border_top === 'string' && border_border_top.trim() !== '';
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ');

  // Parse border style
  const parseBorder = (borderStr: string) => {
    const parts = borderStr.split(' ');
    const width = parts[0] || '1px';
    const style = parts[1] || 'solid';
    const color = parts[2] || '#e6e6e6';
    return `${width} ${style} ${color}`;
  };

  // Build inline styles for required parameters
  const triggerStyles: React.CSSProperties = {
    fontSize: `${text_font_size}px`,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    textAlign: text_text_align as any,
    color: text_color,
    backgroundColor: hasValidBackgroundColor ? fill_background_color : undefined,
    border: parseBorder(border_border),
    borderTop: hasValidBorderTop ? parseBorder(border_border_top) : undefined,
    borderRadius: border_border_radius,
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (optionValue: string | number) => {
    if (disabled) return;
    
    setSelectedValue(optionValue);
    setIsOpen(false);
    
    if (typeof onChange === 'function') {
      onChange(optionValue);
    }
  };

  const selectedOption = options.find(option => option.value === selectedValue);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  return (
    <div 
      ref={dropdownRef}
      className={twMerge(dropdownClasses({ variant, size }), optionalClasses, className)}
    >
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        style={triggerStyles}
        className={twMerge(triggerClasses({ variant }))}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate">{displayText}</span>
        <svg
          className={twMerge(
            'w-4 h-4 transition-transform duration-200',
            isOpen ? 'rotate-180' : 'rotate-0'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul
            role="listbox"
            className="py-1 overflow-auto"
            style={{ maxHeight }}
          >
            {options.map((option) => (
              <li
                key={option.value}
                role="option"
                aria-selected={selectedValue === option.value}
                className={twMerge(
                  'px-3 py-2 cursor-pointer transition-colors duration-150',
                  selectedValue === option.value
                    ? 'bg-green-100 text-green-900' :'text-gray-900 hover:bg-gray-100',
                  option.disabled && 'opacity-50 cursor-not-allowed'
                )}
                onClick={() => !option.disabled && handleOptionClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;