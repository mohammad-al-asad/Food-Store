import React, { useState, useRef, useCallback, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const seekBarClasses = cva(
  'relative w-full cursor-pointer transition-all duration-200',
  {
    variants: {
      variant: {
        default: '',
        primary: '',
        secondary: '',
      },
      size: {
        small: 'h-1',
        medium: 'h-2',
        large: 'h-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const trackClasses = cva(
  'w-full rounded-full transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-gray-300',
        primary: 'bg-green-200',
        secondary: 'bg-blue-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const thumbClasses = cva(
  'absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full border-2 border-white shadow-md cursor-grab active:cursor-grabbing transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-green-500 focus:ring-green-500',
        primary: 'bg-green-600 focus:ring-green-500',
        secondary: 'bg-blue-500 focus:ring-blue-500',
      },
      size: {
        small: 'w-3 h-3',
        medium: 'w-4 h-4',
        large: 'w-5 h-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

interface SeekBarProps extends VariantProps<typeof seekBarClasses> {
  // Required parameters with defaults
  fill_background_color?: string;
  border_border_radius?: string;
  
  // Optional parameters (no defaults)
  layout_width?: string;
  position?: string;
  
  // Standard React props
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  onChange?: (value: number) => void;
  onChangeStart?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
  className?: string;
  disabled?: boolean;
  showValue?: boolean;
  formatValue?: (value: number) => string;
}

const SeekBar = ({
  // Required parameters with defaults
  fill_background_color = "#e6e6e6",
  border_border_radius = "3px",
  
  // Optional parameters (no defaults)
  layout_width,
  position,
  
  // Standard React props
  variant,
  size,
  min = 0,
  max = 100,
  value = 0,
  step = 1,
  onChange,
  onChangeStart,
  onChangeEnd,
  className,
  disabled = false,
  showValue = false,
  formatValue = (val) => val.toString(),
}: SeekBarProps) => {
  const [internalValue, setInternalValue] = useState(value);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ');

  // Calculate percentage
  const percentage = ((internalValue - min) / (max - min)) * 100;

  // Build inline styles for required parameters
  const trackStyles: React.CSSProperties = {
    backgroundColor: fill_background_color,
    borderRadius: border_border_radius,
  };

  const progressStyles: React.CSSProperties = {
    width: `${percentage}%`,
    backgroundColor: '#00b206', // Active color
    borderRadius: border_border_radius,
  };

  const updateValue = useCallback((clientX: number) => {
    if (!trackRef.current || disabled) return;

    const rect = trackRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    let newValue = Math.round((min + percentage * (max - min)) / step) * step;
    
    setInternalValue(newValue);
    
    if (typeof onChange === 'function') {
      onChange(newValue);
    }
  }, [min, max, step, disabled, onChange]);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (disabled) return;
    
    setIsDragging(true);
    updateValue(event.clientX);
    
    if (typeof onChangeStart === 'function') {
      onChangeStart(internalValue);
    }
  };

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (isDragging && !disabled) {
      updateValue(event.clientX);
    }
  }, [isDragging, disabled, updateValue]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      
      if (typeof onChangeEnd === 'function') {
        onChangeEnd(internalValue);
      }
    }
  }, [isDragging, internalValue, onChangeEnd]);

  // Handle mouse events
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    let newValue = internalValue;
    
    switch (event.key) {
      case 'ArrowLeft': case'ArrowDown':
        newValue = Math.max(min, internalValue - step);
        break;
      case 'ArrowRight': case'ArrowUp':
        newValue = Math.min(max, internalValue + step);
        break;
      case 'Home':
        newValue = min;
        break;
      case 'End':
        newValue = max;
        break;
      default:
        return;
    }

    event.preventDefault();
    setInternalValue(newValue);
    
    if (typeof onChange === 'function') {
      onChange(newValue);
    }
  };

  return (
    <div className={twMerge(optionalClasses, className)}>
      <div
        ref={trackRef}
        className={twMerge(seekBarClasses({ variant, size }))}
        onMouseDown={handleMouseDown}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={internalValue}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
      >
        {/* Track */}
        <div
          className={twMerge(trackClasses({ variant }), 'h-full')}
          style={trackStyles}
        />
        
        {/* Progress */}
        <div
          className="absolute top-0 left-0 h-full transition-all duration-200"
          style={progressStyles}
        />
        
        {/* Thumb */}
        <div
          className={twMerge(thumbClasses({ variant, size }))}
          style={{ left: `${percentage}%` }}
        />
      </div>
      
      {/* Value display */}
      {showValue && (
        <div className="mt-2 text-center text-sm text-gray-600">
          {formatValue(internalValue)}
        </div>
      )}
    </div>
  );
};

export default SeekBar;