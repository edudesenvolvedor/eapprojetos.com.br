'use client';

import * as motion from 'motion/react-client';
import { Coffee } from 'lucide-react';

export default function Loading() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <motion.div
          animate={{ rotate: [0, 0, 0, 0], y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
        >
          <Coffee size={80} className="text-accent-light " />
        </motion.div>
        <p className="text-gradient font-bold text-xl">Carregando...</p>
      </div>
    </>
  );
}
