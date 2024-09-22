import { FC, RefAttributes, forwardRef } from 'react'
import Button, { IButtonProps } from './Button'
import { cn } from '@/lib/utils'

const btnIconStyles = {
  size: {
    sm: 'text-sm/8 h-8 w-8',
    base: 'text-base/9 h-9 w-9',
    lg: 'text-base/10 h-10 w-10 font-semibold',
    xl: 'text-base/11 h-11 w-11 font-semibold'
  },
}

const ButtonIcon: FC<IButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef(
  function ButtonIconPrimitive(props, ref) {
    const {
      className,
      size='base',
      ...rest
    } = props
    
    const btnIconClass = cn(
      '!p-0',
      btnIconStyles.size[size],
      className
    )

    return (
      <Button
        ref={ref}
        className={btnIconClass}
        block={false}
        {...rest}
      />
    )
  }
)

ButtonIcon.displayName = 'ButtonIcon'

export default ButtonIcon
