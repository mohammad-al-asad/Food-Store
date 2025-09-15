import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const editTextClasses = cva(
  'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'focus:ring-blue-500',
        success: 'focus:ring-green-500',
        error: 'focus:ring-red-500 border-red-300',
        warning: 'focus:ring-yellow-500 border-yellow-300',
      },
      size: {
        small: 'text-sm px-2 py-1',
        medium: 'text-base px-3 py-2',
        large: 'text-lg px-4 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

type InputPropsWithoutSize = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

interface EditTextProps extends 
  InputPropsWithoutSize,
  VariantProps<typeof editTextClasses> {
  // Required parameters with defaults
  placeholder?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: 'left' | 'center' | 'right';
  text_color?: string;
  fill_background_color?: string;
  border_border?: string;
  border_border_radius?: string;
  
  // Optional parameters (no defaults)
  layout_width?: string;
  padding?: string;
  position?: string;
  
  // Standard React props
  variant?: 'default' | 'success' | 'error' | 'warning';
  size?: 'small' | 'medium' | 'large';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: string;
}

const EditText = ({
  // Required parameters with defaults
  placeholder = "Your email address",
  text_font_size = "16",
  text_font_family = "Poppins",
  text_font_weight = "400",
  text_line_height = "24px",
  text_text_align = "left",
  text_color = "#7f7f7f",
  fill_background_color = "#ffffff",
  border_border = "1 solid #e6e6e6",
  border_border_radius = "26px",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  value,
  onChange,
  className,
  disabled = false,
  type = "text",
  ...props
}: EditTextProps) => {
  const [inputValue, setInputValue] = useState(value || '');

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPadding ? `p-[${padding}]` : '',
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
  const inputStyles: React.CSSProperties = {
    fontSize: `${text_font_size}px`,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    textAlign: text_text_align as any,
    color: text_color,
    backgroundColor: fill_background_color,
    border: parseBorder(border_border),
    borderRadius: border_border_radius,
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  return (
    <input
      type={type}
      value={inputValue}
      onChange={handleInputChange}
      placeholder={placeholder}
      disabled={disabled}
      style={inputStyles}
      className={twMerge(
        editTextClasses({ variant, size }),
        optionalClasses,
        className
      )}
      {...props}
    />
  );
};

export default EditText;