import { FC, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

interface IProps extends VariantProps<typeof styles> {
  title?: string;
  children: ReactNode;
}

const styles = cva('grid gap-6 mt-4', {
  variants: {
    columns: {
      two: 'grid-cols-2',
      three: 'grid-cols-2 md:grid-cols-3',
      six: 'grid-cols-2 md:grid-cols-3 xl:grid-cols-6',
    },
  },
  defaultVariants: {
    columns: 'three',
  },
});

const GridDisplay: FC<IProps> = ({ title, children, columns }: IProps) => (
  <div>
    {title && <h3 className="text-3xl font-bold mt-6">{title}</h3>}
    <div className={styles({ columns })}>{children}</div>
  </div>
);

export default GridDisplay;
