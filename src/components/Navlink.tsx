import { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  isActive?: boolean;
}

export const NavLink = ({ children, isActive }: IProps) => {
  return <li className={`${isActive ? 'navbar__link--active' : 'navbar__link'}`}>{children}</li>;
};
