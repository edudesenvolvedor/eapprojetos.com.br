import { FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

interface IProps extends VariantProps<typeof cardStyles> {
  imageUrl: string;
  labels?: { text: string; variant?: VariantProps<typeof labelStyles>['variant'] }[];
}

const cardStyles = cva('relative rounded-4xl overflow-hidden', {
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

export const ProjectCard: FC<IProps> = ({ imageUrl, labels = [], size }: IProps) => {
  return (
    <div className={cardStyles({ size })}>
      <img src={imageUrl} alt="Project" className="w-full h-full object-cover" />
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
