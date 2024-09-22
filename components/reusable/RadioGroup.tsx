import React from 'react';
import { RadioGroup as RARadioGroup, RadioGroupItem } from '../ui/radio-group';

import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { RadioGroupProps } from '@radix-ui/react-radio-group';
import { commonTypes } from '@/types/commontypes';
import { Label } from '../ui/label';

const radioVariants = cva('text-base', {
    variants: {
      color: {
        primary: 'border-primary-500 text-primary-500',
        secondary: 'border-secondary-500 text-secondary-500',
        error: 'border-error-500 text-error-500',
        warning: 'border-warning-500 text-warning-500',
        success: 'border-success-500 text-success-500',
        info: 'border-info-500 text-info-500',
        default: 'border-default-500 text-default-500',
      },
    //   size: {
    //     sm: 'h-3 w-3 text-sm/8',
    //     base: 'h-4 w-4 text-base/9',
    //     lg: 'h-5 w-5 text-lg/9',
    //     xl: 'h-6 w-6 text-xl/9'
    //   },
    },
    defaultVariants: {
      color: 'default',
    //   size: 'base'
    }
  })

export interface IRadioGroupProps extends RadioGroupProps {
    radioItems:{
        id?: string
        label?: string
        value?: string
        isDiable?: boolean
    }[],
    color?: commonTypes['color']
}

const RadioGroup: React.FC<IRadioGroupProps> = ({ radioItems, color='default', className, ...props }) => {
    return (
        <RARadioGroup className={cn(radioVariants({color}), className)} {...props}>
            {radioItems?.map((r, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem className={cn(radioVariants({color}))} disabled={r?.isDiable} value={r?.value ?? ''} id={r.id} />
                    <Label htmlFor={r.id}>{r.label}</Label>
                </div>
            ))}
        </RARadioGroup>
      )
};

RadioGroup.displayName = 'RadioGroup'; // Set a display name for better debugging

export default RadioGroup;
