import { FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Image, { StaticImageData } from 'next/image';

interface IProps extends VariantProps<typeof cardStyles> {
  imageSrc: string | StaticImageData;
  labels?: { text: string; variant?: VariantProps<typeof labelStyles>['variant'] }[];
}

const cardStyles = cva('relative rounded-4xl overflow-hidden overflow-clip aspect-square', {
  variants: {
    size: {
      small: 'w-48 h-48',
      medium: 'w-64 h-64',
      large: 'w-96 h-96',
      full: 'w-full h-full',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const labelStyles = cva('bg-base-light py-2 px-4 rounded-2xl', {
  variants: {
    variant: {
      default: 'bg-base-light',
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const ProjectCard: FC<IProps> = ({ imageSrc, labels = [], size }: IProps) => {
  return (
    <div className={cardStyles({ size })}>
      {typeof imageSrc === 'object' ? (
        <Image src={imageSrc} alt="" className="w-full h-full object-cover aspect-square" />
      ) : (
        <img
          src={imageSrc as string}
          alt="Project"
          className="w-full h-full object-cover aspect-square"
        />
      )}
      <div className="absolute bottom-8 left-8 flex space-x-2">
        {labels.map((label, index) => (
          <div key={index} className={labelStyles({ variant: label.variant })}>
            {label.text}
          </div>
        ))}
      </div>
    </div>
  );
};
