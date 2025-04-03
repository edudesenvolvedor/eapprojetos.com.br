'use client';

import { Menu } from 'lucide-react';
import { ReactNode, useState, FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

interface IProps extends VariantProps<typeof style> {
  children?: ReactNode;
  brand?: string | ReactNode;
  rightButton?: ReactNode;
}

const style = cva(
  'fixed top-0 left-0 w-full xl:left-auto xl:flex xl:items-center xl:justify-between xl:w-10/12 z-10 xl:top-8 xl:right-0 px-8 before:absolute before:inset-0 before:w-full before:h-full before:bg-white/20 before:shadow-lg before:backdrop-blur-sm before:border before:border-white/30 before:z-[-1] xl:before:hidden',
  {
    variants: {
      isOpen: {
        true: 'block',
        false: 'hidden',
      },
    },
  },
);

export const Navbar: FC<IProps> = ({ children, rightButton, brand, isOpen = false }: IProps) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className={style()}>
      <div className="p-4 flex xl:p-0 xl:hidden items-center">
        {brand}
        <button
          className="border border-stroke-elements-light p-2 hover:cursor-pointer rounded-xl ml-auto"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <Menu />
        </button>
      </div>
      <div className={style({ isOpen: open }) + ' mt-18 lg:mt-0 xl:flex w-full xl:justify-end'}>
        <nav className={'mt-8 px-8 text-center xl:mt-0 xl:p-0'}>
          <ul className={'xl:flex text-xl font-semibold xl:space-x-2'}>{children}</ul>
        </nav>
        <div className="flex items-center space-x-3 px-8 xl:mt-0 pb-8 xl:p-0 xl:border-none 2xl:ml-12">
          {rightButton}
        </div>
      </div>
    </div>
  );
};
