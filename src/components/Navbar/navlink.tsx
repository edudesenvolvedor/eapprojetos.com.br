import { ReactNode, FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';

interface IProps extends VariantProps<typeof style> {
  children?: ReactNode;
  className?: string;
  href?: string;
}

const style = cva(
  "py-3 px-6 rounded-full cursor-pointer relative before:content-[''] before:absolute before:rounded-full before:inset-0 before:w-full before:h-full xl:backdrop-blur-sm before:z-[-1]",
  {
    variants: {
      isActive: {
        true: 'text-t-bright-light border border-stroke-elements-light',
        false: 'border border-transparent text-t-disabled-light hover:text-t-bright-light',
      },
    },
    defaultVariants: {
      isActive: false,
    },
  },
);

export const Navlink: FC<IProps> = ({
  children,
  isActive = false,
  href = '#',
  className,
}: IProps) => {
  return (
    <li className={style({ isActive, className })}>
      <Link href={href}>{children}</Link>
    </li>
  );
};
