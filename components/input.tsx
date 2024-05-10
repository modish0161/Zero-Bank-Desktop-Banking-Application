// ./components/ui/input.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        {...props}
        value={props.value || ''}
        className={cn(
          'flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm placeholder:text-gray-400',
          className
        )}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
