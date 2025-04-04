import { FC, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

interface IconCardProps extends VariantProps<typeof cardStyles> {
  children: ReactNode;
}

const cardStyles = cva('p-4 xl:p-8 border rounded-lg flex flex-wrap justify-center items-center', {
  variants: {
    variant: {
      light: 'border-gray-300',
      dark: 'border-gray-700',
    },
  },
  defaultVariants: {
    variant: 'light',
  },
});

const IconCard: FC<IconCardProps> = ({ children, variant }) => (
  <div className={cardStyles({ variant })}>{children}</div>
);

export default IconCard;
