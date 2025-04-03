import { cva, type VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof styles> {
  name: string;
  icon: string;
}

const styles = cva('p-8 border rounded-4xl flex flex-col items-center transition-shadow', {
  variants: {
    variant: {
      default: 'border-stroke-elements-light hover:shadow-md',
      primary: 'border-blue-500 hover:shadow-blue-300',
      success: 'border-green-500 hover:shadow-green-300',
      warning: 'border-yellow-500 hover:shadow-yellow-300',
      error: 'border-red-500 hover:shadow-red-300',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const ToolCard: FC<IProps> = ({ name, icon, variant, className, ...props }: IProps) => {
  return (
    <div className={styles({ variant, className })} {...props}>
      <img src={icon} alt={name} className="w-24 h-24" />
      <span className="mt-2 text-center font-medium">{name}</span>
    </div>
  );
};
