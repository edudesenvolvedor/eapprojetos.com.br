import { cva, type VariantProps } from 'class-variance-authority';
import { FC } from 'react';

interface IProps extends VariantProps<typeof style> {
  title: string;
  value: string | number;
}

const style = cva('py-8 xl:py-16 text-center border rounded-4xl', {
  variants: {
    variant: {
      light: 'border-stroke-elements-light',
      dark: 'border-stroke-elements-dark',
    },
  },
  defaultVariants: {
    variant: 'light',
  },
});

export const KeyMetricCard: FC<IProps> = ({ title, value, variant }: IProps) => (
  <div className={style({ variant })}>
    <span className="text-5xl xl:text-7xl font-bold text-gradient">{value}</span>
    <span className="block text-gray-500 text-xl xl:text-2xl">{title}</span>
  </div>
);
