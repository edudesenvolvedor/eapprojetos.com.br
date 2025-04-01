'use client';

import { Menu } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface IProps {
  children?: ReactNode;
  brand?: string | ReactNode;
  rightButton?: ReactNode;
}

export const Navbar = ({ children, rightButton, brand }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:flex xl:items-center xl:justify-between max-w-10/12 fixed z-10 top-8 right-0 w-full px-8">
      <div className="p-4 flex xl:p-0 xl:hidden">
        {brand}
        <div
          className="border border-stroke-elements-light p-2 hover:cursor-pointer rounded-xl ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} xl:flex w-full justify-between`}>
        <nav className="mt-8 px-8 text-center xl:mt-0 xl:p-0">
          <ul className="xl:flex text-xl font-semibold xl:space-x-3">{children}</ul>
        </nav>
        <div className="flex items-center space-x-3 px-8 my-8 xl:mt-0 border-b pb-8 xl:p-0 border-b-stroke-elements-light xl:border-none">
          {rightButton}
        </div>
      </div>
    </div>
  );
};
