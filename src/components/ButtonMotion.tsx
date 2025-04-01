'use client';

import * as motion from 'motion/react-client';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const ButtonMotion = ({ children }: IProps) => {
  return (
    <motion.button className="btn overflow-clip w-full" whileHover={{ scale: 1.05 }}>
      <span className="flex space-x-2 mx-auto">{children}</span>
    </motion.button>
  );
};
