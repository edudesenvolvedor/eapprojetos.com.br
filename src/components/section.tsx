import { FC, ReactNode } from 'react';
import { cva } from 'class-variance-authority';

interface IProps {
  children: ReactNode;
  badge?: ReactNode;
  description?: string;
}

const sectionStyles = cva('mt-24 flex flex-col space-y-4 my-32');
const titleStyles = cva('text-3xl xl:text-6xl text-gradient font-bold mb-2 xl:mb-16 mt-4');

export const Section: FC<IProps> = ({ children, badge, description }: IProps) => (
  <section className={sectionStyles()}>
    {badge}
    <h2 className={titleStyles()}>{description}</h2>
    {children}
  </section>
);
