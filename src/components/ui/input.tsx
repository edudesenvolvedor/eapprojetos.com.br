import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva('p-3 border-b-2 w-full focus:ring-0 focus:outline-0 transition-colors', {
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
});

interface IProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export const Input: React.FC<IProps> = ({ variant, className, ...props }: IProps) => {
  return <input className={inputVariants({ variant, className })} {...props} />;
};
