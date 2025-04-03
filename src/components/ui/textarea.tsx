import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const styles = cva(
  'p-3 border-b-2 w-full focus:ring-0 focus:outline-0 transition-colors resize-none',
  {
    variants: {
      variant: {
        default: 'border-gray-300 focus:border-b-accent-light',
        error: 'border-red-500 focus:border-red-700',
        success: 'border-green-500 focus:border-green-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface IProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof styles> {}

export const Textarea: React.FC<IProps> = ({ variant, className, ...props }: IProps) => {
  return <textarea className={styles({ variant, className })} {...props} />;
};
