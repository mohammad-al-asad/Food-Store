import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const checkboxClasses = cva(
  'inline-flex items-center gap-2 cursor-pointer transition-all duration-200 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2',
  {
    variants: {
      variant: {
        default: '',
        primary: '',
        secondary: '',
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

const checkboxInputClasses = cva(
  'w-4 h-4 border-2 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'border-gray-300 text-green-600 focus:border-green-500',
        primary: 'border-green-300 text-green-600 focus:border-green-500',
        secondary: 'border-blue-300 text-blue-600 focus:border-blue-500',
      },
      checked: {
        true: 'bg-green-600 border-green-600',
        false: 'bg-white',
      },
    },
    defaultVariants: {
      variant: 'default',
      checked: false,
    },
  }
);

interface CheckBoxProps extends 
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
  VariantProps<typeof checkboxClasses> {
  // Required parameters with defaults
  text?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_color?: string;
  
  // Optional parameters (no defaults)
  layout_gap?: string;
  layout_width?: string;
  position?: string;
  
  // Standard React props
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  id?: string;
}

const CheckBox = ({
  // Required parameters with defaults
  text = "Remember me",
  text_font_size = "14",
  text_font_family = "Poppins",
  text_font_weight = "400",
  text_line_height = "21px",
  text_color = "#666666",
  
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  position,
  
  // Standard React props
  variant,
  size,
  label,
  checked = false,
  onChange,
  className,
  disabled = false,
  id,
  ...props
}: CheckBoxProps) => {
  const [internalChecked, setInternalChecked] = useState(checked);

  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ');

  // Build inline styles for required parameters
  const labelStyles: React.CSSProperties = {
    fontSize: `${text_font_size}px`,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    color: text_color,
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setInternalChecked(newChecked);
    
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  const displayText = label || text;
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label 
      htmlFor={checkboxId}
      className={twMerge(
        checkboxClasses({ variant, size }),
        optionalClasses,
        className,
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      <input
        type="checkbox"
        id={checkboxId}
        checked={internalChecked}
        onChange={handleChange}
        disabled={disabled}
        className={twMerge(
          checkboxInputClasses({ variant, checked: internalChecked })
        )}
        {...props}
      />
      
      {displayText && (
        <span style={labelStyles} className="select-none">
          {displayText}
        </span>
      )}
    </label>
  );
};

export default CheckBox;