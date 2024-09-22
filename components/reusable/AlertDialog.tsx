  "use client"; // This makes the component a client component
  
  import {
    AlertDialog as RAAlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { AlertDialogProps } from "@radix-ui/react-alert-dialog"
  import Button from "./Button"
  import { cn } from "@/lib/utils"

  export interface IAlertDialogProps extends AlertDialogProps {
    trigger?: string | React.ReactNode
    title?: string
    description?: string
    className?: string
    onActionClick?: React.MouseEventHandler<HTMLButtonElement>
    actionLabel?: string
  }

  const AlertDialog: React.FC<IAlertDialogProps> = (
    { 
      title='',
      trigger='',
      description='',
      className,
      actionLabel,
      onActionClick,
      ...props
    }) => {

    return (
      <RAAlertDialog {...props}>
        <AlertDialogTrigger asChild className="ring-0 outline-none">
          {typeof(trigger) === 'string' 
            ? <Button variant="outline">{trigger}</Button>
            : trigger
          }
        </AlertDialogTrigger>
        <AlertDialogContent className={cn('!flex flex-col p-7 bg-white gap-4 justify-center', className)}>
          <AlertDialogHeader className="space-y-4">
            <AlertDialogTitle className="text-center text-xl">{title || trigger || ''}</AlertDialogTitle>
            <AlertDialogDescription>
              {description}          
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel 
              className="bg-secondary-400 text-white hover:text-white hover:bg-secondary-500">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={onActionClick}
              className="bg-error-500 text-white hover:text-white hover:bg-error-600">
              {actionLabel}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </RAAlertDialog>
    )
  }

  AlertDialog.displayName = 'AlertDialog'; // Set a display name for better debugging

  export default AlertDialog;
