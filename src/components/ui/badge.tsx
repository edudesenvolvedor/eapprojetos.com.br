import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Star } from 'lucide-react';

interface IProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof styles> {
  text: string;
}

const styles = cva(
  'inline-flex items-center space-x-2 border p-2 px-4 rounded-3xl font-semibold transition-colors w-fit text-xs',
  {
    variants: {
      variant: {
        default: 'border-stroke-elements-light text-t-medium-light',
        primary: 'border-blue-500 text-blue-500',
        success: 'border-green-500 text-green-500',
        warning: 'border-yellow-500 text-yellow-500',
        error: 'border-red-500 text-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const Badge: React.FC<IProps> = ({ text, variant, className, ...props }: IProps) => {
  return (
    <div className={styles({ variant, className })} {...props}>
      <Star size={12} />
      <span>{text}</span>
    </div>
  );
};
