import React from 'react';
import { Checkbox as RACheckbox } from "../ui/checkbox";
import { CheckboxProps } from '@radix-ui/react-checkbox';
import { commonTypes } from '@/types/commontypes';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const radioVariants = cva('text-base', {
    variants: {
      color: {
        primary: 'bg-transparent border-primary-500 data-[state=checked]:bg-primary-500 text-white',
        secondary: 'bg-transparent border-secondary-500 data-[state=checked]:bg-secondary-500 text-white',
        error: 'bg-transparent border-error-500 data-[state=checked]:bg-error-500 text-white',
        warning: 'bg-transparent border-warning-500 data-[state=checked]:bg-warning-500 text-white',
        success: 'bg-transparent border-success-500 data-[state=checked]:bg-success-500 text-white',
        info: 'bg-transparent border-info-500 data-[state=checked]:bg-info-500 text-white',
        default: 'bg-transparent border-default-500 data-[state=checked]:bg-default-500 text-white',
      },
    },
    defaultVariants: {
      color: 'default',
    }
  })

export interface ICheckboxProps extends CheckboxProps {
    color?: commonTypes['color']
}

const Checkbox: React.FC<ICheckboxProps> = ({ color='default', className, ...props }) => {
    return (
        <RACheckbox className={cn(radioVariants({color}), className)} {...props}/>
      )
};

Checkbox.displayName = 'Checkbox'; // Set a display name for better debugging

export default Checkbox;
