import { FC, RefAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { commonTypes } from '@/types/commontypes'
import Laoder from './Loader'

const btnStyles = {
  base: 'flex gap-2 items-center justify-center',
  variant: {
    ghost: {
      primary: 'bg-transparent hover:bg-primary-50 text-primary-500',
      secondary: 'bg-transparent hover:bg-secondary-50 text-secondary-500',
      default: 'bg-transparent hover:bg-default-50 text-default-500',
      success: 'bg-transparent hover:bg-success-50 text-success-500',
      warning: 'bg-transparent hover:bg-warning-50 text-warning-500',
      error: 'bg-transparent hover:bg-error-50 text-error-500',
      info: 'bg-transparent hover:bg-info-50 text-info-500',
    },
    fill: {
      primary:
        'bg-primary-500 hover:bg-primary-600 text-white border-0',
      secondary:
        'bg-secondary-500 hover:bg-secondary-600 text-white border-0',
     default:
        'bg-default-500 hover:bg-default-600 text-white border-0',
      success:
        'bg-success-500 hover:bg-success-600 text-white border-0',
      warning:
        'bg-warning-500 hover:bg-warning-600 text-white border-0',
      error:
        'bg-error-500 hover:bg-error-600 text-white border-0',
      info: 'bg-info-500 hover:bg-info-600 text-white border-0',
     },
    outline: {
      primary:
        'bg-transparent border text-primary-500 border-primary-500 hover:text-primary-600 hover:border-primary-600 hover:bg-primary-50',
      secondary:
        'bg-transparent border text-secondary-500 border-secondary-500 hover:text-secondary-600 hover:border-secondary-600 hover:bg-secondary-50',
      default:
        'bg-transparent border text-default-500 border-default-500 hover:text-default-600 hover:border-default-600 hover:bg-default-50',
      success:
        'bg-transparent border text-success-500 border-success-500 hover:text-success-600 hover:border-success-600 hover:bg-success-50',
      warning:
        'bg-transparent border text-warning-500 border-warning-500 hover:text-warning-600 hover:border-warning-600 hover:bg-warning-50',
      error:
        'bg-transparent border text-error-500 border-error-500 hover:text-error-600 hover:border-error-600 hover:bg-error-50',
      info: 'bg-transparent border text-info-500 border-info-500 hover:text-info-600 hover:border-info-600 hover:bg-info-50',
     }
  },
  radius: {
    none: 'rounded-none',
    soft: 'rounded',
    round: 'rounded-full'
  },
  size: {
    sm: 'text-sm/8 px-4',
    base: 'text-base/9 px-5',
    lg: 'text-base/10 px-6 font-semibold',
    xl: 'text-base/10 px-7 font-semibold'
  },
  transition: 'hover:scale-105 transition-all duration-200',
  block: '!w-full'
}

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: commonTypes['color']
  variant?: commonTypes['variant']
  size?: commonTypes['size']
  radius?: commonTypes['radius']
  loading?: boolean
  scaleUp?: boolean
  block?: boolean
}

const Button: FC<IButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef(
  (props, ref) => {
    const {
      color = 'primary',
      className,
      type = 'button',
      size = 'base',
      variant = 'fill',
      radius = 'none',
      scaleUp = false,
      block = false,
      loading = false,
      children,
      ...rest
    } = props

    const btnClass = cn(
      btnStyles.base,
      scaleUp ? btnStyles.transition : '',
      block ? btnStyles.block : 'w-auto',
      btnStyles.radius[radius],
      btnStyles.variant[variant][color],
      btnStyles.size[size],
      className
    )

    return (
      <button ref={ref} className={btnClass} type={type} {...rest}>
        {loading && (
          <Laoder
            size={size === 'sm' ? size : 'base'}
            color={variant === 'fill' ? 'inherit' : color}
          />
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
