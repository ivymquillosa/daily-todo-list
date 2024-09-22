export type commonTypes = {
    variant?: 'fill' | 'outline' | 'ghost'
    color?:
      | 'primary'
      | 'secondary'
      | 'error'
      | 'warning'
      | 'success'
      | 'info'
      | 'default'
    size?: 'sm' | 'base' | 'lg' | 'xl'
    radius?: 'none' | 'soft' | 'round'
  }

export type TodoData = {
  id: string;
  title?: string;
  description?: string;
  completed?: boolean;
  timestamp: number;
};