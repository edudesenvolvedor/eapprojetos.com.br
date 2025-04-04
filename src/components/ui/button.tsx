import { cva, type VariantProps } from 'class-variance-authority';
import { FC, ButtonHTMLAttributes, ReactNode } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof style> {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const style = cva('cursor-pointer flex items-center space-x-2 font-semibold justify-center', {
  variants: {
    variant: {
      primary:
        'bg-gradient-to-br from-accent-light to-secondary-light rounded-full text-base-light',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      success: 'bg-green-500 text-white hover:bg-green-600',
      danger: 'bg-red-500 text-white hover:bg-red-600',
      warning: 'bg-yellow-500 text-black hover:bg-yellow-600',
      info: 'bg-blue-500 text-white hover:bg-blue-600',
      light: 'bg-white text-gray-800 border border-gray-300',
      dark: 'bg-gray-800 text-white hover:bg-gray-900',
      link: 'text-blue-500 hover:underline',
      outline:
        "relative border border-stroke-controls-neutral-light text-t-bright-light rounded-full before:content-[''] before:absolute before:rounded-full before:inset-0 before:w-full before:h-full before:backdrop-blur-sm before:z-[-1] hover:before:shadow-md",
      ghost:
        "relative text-t-bright-light before:content-[''] before:absolute before:rounded-full before:inset-0 before:w-full before:h-full before:backdrop-blur-sm before:z-[-1] hover:before:shadow-md hover:before:border hover:before:border-stroke-controls-neutral-light hover:rounded-full",
      glass:
        "p-3 relative before:content-[''] before:absolute before:rounded-full before:inset-0 before:w-full before:h-full before:backdrop-blur-sm before:z-[-1]",
    },
    size: {
      small: 'py-1 px-3 text-sm',
      medium: 'py-2 px-4 text-md',
      large: 'py-3 px-5 text-lg',
      default: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export const Button: FC<IProps> = ({
  variant,
  size,
  icon,
  iconPosition = 'left',
  className = '',
  children,
  ...props
}: IProps) => {
  return (
    <button className={`${style({ variant, size })} ${className}`} {...props}>
      {icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};
