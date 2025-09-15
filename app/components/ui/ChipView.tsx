import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const chipViewClasses = cva(
  'flex flex-wrap items-center gap-2 transition-all duration-200',
  {
    variants: {
      variant: {
        default: '',
        contained: 'bg-gray-100 p-2 rounded-lg',
        outlined: 'border border-gray-300 p-2 rounded-lg',
      },
      size: {
        small: 'gap-1',
        medium: 'gap-2',
        large: 'gap-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const chipClasses = cva(
  'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      chipVariant: {
        default: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-500',
        primary: 'bg-green-100 text-green-800 hover:bg-green-200 focus:ring-green-500',
        secondary: 'bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-blue-500',
        success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
        warning: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 focus:ring-yellow-500',
        error: 'bg-red-100 text-red-800 hover:bg-red-200 focus:ring-red-500',
      },
      selected: {
        true: 'bg-green-500 text-white',
        false: '',
      },
    },
    defaultVariants: {
      chipVariant: 'default',
      selected: false,
    },
  }
);

interface ChipItem {
  id: string | number;
  label: string;
  value?: any;
  disabled?: boolean;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

interface ChipViewProps extends VariantProps<typeof chipViewClasses> {
  // Optional parameters (no defaults)
  layout_width?: string;
  position?: string;
  
  // Standard React props
  variant?: 'default' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  chips?: ChipItem[];
  selectedChips?: (string | number)[];
  multiSelect?: boolean;
  onChipClick?: (chip: ChipItem) => void;
  onSelectionChange?: (selectedIds: (string | number)[]) => void;
  className?: string;
  disabled?: boolean;
}

const ChipView = ({
  // Optional parameters (no defaults)
  layout_width,
  position,
  
  // Standard React props
  variant,
  size,
  chips = [],
  selectedChips = [],
  multiSelect = false,
  onChipClick,
  onSelectionChange,
  className,
  disabled = false,
}: ChipViewProps) => {
  const [internalSelected, setInternalSelected] = useState<(string | number)[]>(selectedChips);

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ');

  const handleChipClick = (chip: ChipItem) => {
    if (disabled || chip.disabled) return;

    let newSelected: (string | number)[];

    if (multiSelect) {
      if (internalSelected.includes(chip.id)) {
        newSelected = internalSelected.filter(id => id !== chip.id);
      } else {
        newSelected = [...internalSelected, chip.id];
      }
    } else {
      newSelected = internalSelected.includes(chip.id) ? [] : [chip.id];
    }

    setInternalSelected(newSelected);

    if (typeof onChipClick === 'function') {
      onChipClick(chip);
    }

    if (typeof onSelectionChange === 'function') {
      onSelectionChange(newSelected);
    }
  };

  const isSelected = (chipId: string | number) => {
    return internalSelected.includes(chipId);
  };

  return (
    <div className={twMerge(chipViewClasses({ variant, size }), optionalClasses, className)}>
      {chips.map((chip) => (
        <button
          key={chip.id}
          onClick={() => handleChipClick(chip)}
          disabled={disabled || chip.disabled}
          className={twMerge(
            chipClasses({
              chipVariant: chip.variant || 'default',
              selected: isSelected(chip.id),
            }),
            (disabled || chip.disabled) && 'opacity-50 cursor-not-allowed'
          )}
          aria-pressed={isSelected(chip.id)}
          role="button"
          tabIndex={disabled || chip.disabled ? -1 : 0}
        >
          {chip.label}
        </button>
      ))}
    </div>
  );
};

export default ChipView;