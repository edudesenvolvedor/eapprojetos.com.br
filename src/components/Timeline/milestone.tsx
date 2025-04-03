import { cva, type VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';

const styles = cva('border-b py-4 flex flex-wrap items-center justify-between md:*:w-auto', {
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
});

interface IProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof styles> {
  year: string;
  title: string;
  institution: string;
  description: string;
}

export const Milestone: FC<IProps> = ({
  year,
  title,
  institution,
  description,
  variant,
  className,
  ...props
}: IProps) => {
  return (
    <div className={styles({ variant, className })} {...props}>
      <div className="text-lg text-t-muted-light font-semibold w-full md:max-w-2/12">{year}</div>
      <div className="flex flex-col w-full py-5">
        <span className="font-bold">{title}</span>
        <span className="text-sm text-gray-500">{institution}</span>
      </div>
      <p className="text-sm mt-2 w-full md:max-w-4/12">{description}</p>
    </div>
  );
};
