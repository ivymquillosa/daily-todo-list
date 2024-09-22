import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { commonTypes } from '@/types/commontypes'
import { Select as RASelect, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { SelectProps } from '@radix-ui/react-select'

const selectVariants = cva('flex items-center justify-center', {
  variants: {
    // size: {
    //   sm: 'gap-2 px-2 text-xs/5',
    //   base: 'gap-2 px-2 text-sm/6',
    //   lg: 'gap-2 px-3 text-sm/7',
    //   xl: 'gap-2 px-4 text-base/8'
    // },
    radius: {
      none: 'rounded-none',
      soft: 'rounded',
      round: 'rounded-full'
    }
  },
  defaultVariants: {
    // size: 'base',
    radius: 'round'
  }
})

const selectStyles = {
  variant: {
    ghost: {
      primary:
        'bg-transparent px-0 !rounded-b-none text-primary-500 border-b border-primary-500',
      secondary:
        'bg-transparent px-0 !rounded-b-none text-secondary-500 border-b border-secondary-500',
      default:
        'bg-transparent px-0 !rounded-b-none text-default-600 border-b border-default-500',
      success:
        'bg-transparent px-0 !rounded-b-none text-success-500 border-b border-success-500',
      warning:
        'bg-transparent px-0 !rounded-b-none text-warning-500 border-b border-warning-500',
      error:
        'bg-transparent px-0 !rounded-b-none text-error-500 border-b border-error-500',
      info: 'bg-transparent px-0 !rounded-b-none text-info-500 border-b border-info-500',
      },
    fill: {
      primary:
        'pt-3 bg-primary-500 hover:bg-primary-600 text-light-500 border-light-500 border-0',
      secondary:
        'pt-3 bg-secondary-500 hover:bg-secondary-600 text-light-500 border-light-500 border-0',
     default:
        'pt-3 bg-default-500 hover:bg-default-600 text-light-500 border-light-500 border-0',
      success:
        'pt-3 bg-success-500 hover:bg-success-600 text-light-500 border-light-500 border-0',
      warning:
        'pt-3 bg-warning-500 hover:bg-warning-600 text-dark-500 border-dark-500 border-0',
      error:
        'pt-3 bg-error-500 hover:bg-error-600 text-light-500 border-light-500 border-0',
      info: 'pt-3 bg-info-500 hover:bg-info-600 text-light-500 border-light-500 border-0',
     },
    outline: {
      primary:
        'bg-transparent border text-primary-500 border-primary-500 hover:text-primary-600 hover:border-primary-600',
      secondary:
        'bg-transparent border text-secondary-500 border-secondary-500 hover:text-secondary-600 hover:border-secondary-600',
      default:
        'bg-transparent border text-default-600 border-default-500 hover:text-default-600 hover:border-default-600',
      success:
        'bg-transparent border text-success-500 border-success-500 hover:text-success-600 hover:border-success-600',
      warning:
        'bg-transparent border text-warning-500 border-warning-500 hover:text-warning-600 hover:border-warning-600',
      error:
        'bg-transparent border text-error-500 border-error-500 hover:text-error-600 hover:border-error-600',
      info: 'bg-transparent border text-info-500 border-info-500 hover:text-info-600 hover:border-info-600',
      }
  },
  labelVariant: {
    ghost: '-top-1 left-0 bg-white',
    fill: 'top-1 left-2',
    outline: '-top-1.5 left-2 bg-white',
  }
}

export interface ISelectProps extends SelectProps {
  variant?: commonTypes['variant']
  color?: commonTypes['color']
  className?: string;
  radius?: commonTypes['radius']
  label?: string
  icon?: React.ReactNode
  placeHolder?: string
  selectOptions:{
    id?: string
    label?: string
    value: string
    isDiable?: boolean
  }[],
}

const Select = React.forwardRef<HTMLDivElement, ISelectProps>(
  (
    {
      variant = 'outline',
      color = 'default',
      radius,
      className,
      label,
      icon,
      placeHolder,
      selectOptions,
      ...props
    },
    ref
  ) => {

    return (
      <div ref={ref}
        className={cn(
          selectStyles.variant[variant][color],
          selectVariants({ radius, className }),
          'relative gap-2 px-2'
        )}
      >
        <span
          className={cn(
            selectStyles.labelVariant[variant],
            'absolute text-[10px] font-light px-0.5 leading-none text-inherit'
          )}
        >
          {label}
        </span>
        {icon && icon}
        <RASelect {...props}>
          <SelectTrigger className="w-full border-none shadow-none py-1.5 px-0">
            <SelectValue placeholder={placeHolder} />
          </SelectTrigger>
          <SelectContent >
            {selectOptions?.map((s, index) => (
              <SelectItem key={index} disabled={s?.isDiable} value={s?.value}>{s?.label}</SelectItem>
            ))}
          </SelectContent>
        </RASelect>
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
