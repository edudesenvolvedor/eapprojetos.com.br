'use client';

import Image from 'next/image';
import { cva, type VariantProps } from 'class-variance-authority';
import { FC } from 'react';

interface IProps extends VariantProps<typeof style> {
  src: string;
  alt?: string;
}

const style = cva('', {
  variants: {
    size: {
      small: 'w-12 h-12',
      medium: 'w-24 h-24',
      large: 'w-48 h-48',
      full: 'w-full h-full',
    },
    shape: {
      rounded: 'rounded-4xl',
      circle: 'rounded-full',
      square: 'rounded-none',
    },
  },
  defaultVariants: {
    size: 'full',
    shape: 'rounded',
  },
});

export const Avatar: FC<IProps> = ({ src, alt = 'Avatar', size, shape }: IProps) => {
  return (
    <div className="flex">
      <Image
        loader={() => src}
        src={src}
        alt={alt}
        width={1024}
        height={1024}
        className={style({ size, shape })}
      />
    </div>
  );
};
