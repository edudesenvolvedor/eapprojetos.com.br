import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const styles = cva('mt-6', {
  variants: {
    size: {
      sm: 'text-lg',
      md: 'text-xl',
      lg: 'text-2xl',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

interface Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof styles> {
  title?: string;
  children: ReactNode;
}

export const Timeline: FC<Props> = ({ title, size, className, children, ...props }: Props) => {
  return (
    <div className={styles({ size, className })} {...props}>
      <h3 className="font-extrabold text-5xl text-t-bright-light ">{title}</h3>
      <div className="space-y-6 mt-4">{children}</div>
    </div>
  );
};
