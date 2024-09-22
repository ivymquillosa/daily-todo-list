import { FC, RefAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const loaderVariants = cva('animate-spin rounded-full !border-b-transparent', {
  variants: {
    color: {
      primary: 'border-primary-500',
      secondary: 'border-secondary-500',
      error: 'border-error-500',
      warning: 'border-warning-500',
      success: 'border-success-500',
      info: 'border-info-500',
      default: 'border-default-500',
      inherit: 'border-inherit'
    },
    size: {
      sm: 'h-3 w-3 border',
      base: 'h-4 w-4 border-2',
      lg: 'h-5 w-5 border-2',
      xl: 'h-6 w-6 border-2'
    }
  },
  defaultVariants: {
    color: 'inherit',
    size: 'base'
  }
})

export interface ILoaderProps extends VariantProps<typeof loaderVariants> {
  className?: string
}
const Loader: FC<ILoaderProps & RefAttributes<HTMLDivElement>> = forwardRef(
  ({ color, size, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(loaderVariants({ color, size, className }))}
      ></div>
    )
  }
)

Loader.displayName = 'Loader'

export default Loader
