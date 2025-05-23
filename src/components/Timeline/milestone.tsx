import { cva, type VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';

const styles = cva(
  'border-b py-4 flex flex-wrap lg:flex-nowrap items-center md:*:w-auto text-start gap-3',
  {
    variants: {
      variant: {
        default: 'border-stroke-elements-light',
        primary: 'border-blue-500',
        success: 'border-green-500',
        warning: 'border-yellow-500',
        error: 'border-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface IProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof styles> {
  year: string;
  title: string;
  label?: string;
  description: string;
}

export const Milestone: FC<IProps> = ({
  year,
  title,
  label,
  description,
  variant,
  className,
  ...props
}: IProps) => {
  return (
    <div className={styles({ variant, className })} {...props}>
      <div className="text-lg text-t-muted-light font-semibold min-w-2/12">{year}</div>
      <div className="flex flex-col py-5 min-w-5/12">
        <span className="font-bold">{title}</span>
        <span className="text-sm text-gray-500">{label}</span>
      </div>
      <p className="text-sm lg:text-[18px]  mt-2 min-w-5/12">{description}</p>
    </div>
  );
};
