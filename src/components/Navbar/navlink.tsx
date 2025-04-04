'use client';

import { ReactNode, FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Link } from 'react-scroll';

interface IProps extends VariantProps<typeof style> {
  children?: ReactNode;
  className?: string;
  href?: string;
}

const style = cva(
  "py-3 px-6 rounded-full cursor-pointer relative before:content-[''] before:absolute before:rounded-full before:inset-0 before:w-full before:h-full xl:backdrop-blur-sm before:z-[-1] relative",
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
      <Link
        activeClass={
          "before:content-[''] before:border before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full text-t-bright-light"
        }
        to={href}
        spy={true}
        smooth={true}
        delay={300}
        isDynamic={true}
      >
        {children}
      </Link>
    </li>
  );
};
