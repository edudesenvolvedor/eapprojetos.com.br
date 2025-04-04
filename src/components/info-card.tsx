import { FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Badge } from '@/components/ui/badge';

interface IProps extends VariantProps<typeof style> {
  title: string;
  description: string;
  imageUrl: string;
  labels?: string[];
}

const style = cva('border rounded-4xl text-3xl font-bold flex flex-col space-y-4', {
  variants: {
    variant: {
      light: 'border-stroke-elements-light bg-base-tint-light text-black',
      dark: 'border-stroke-elements-dark bg-gray-800 text-white',
    },
  },
  defaultVariants: {
    variant: 'light',
  },
});

const InfoCard: FC<IProps> = ({ title, description, variant, imageUrl, labels = [] }: IProps) => (
  <div className={style({ variant })}>
    <div className="px-6 mt-8 mb-16 space-y-3">
      <div className="text-[24px]">{title}</div>
      <div className="flex space-x-2">
        {labels.map((label, index) => (
          <Badge key={index} text={label} />
        ))}
      </div>
      <p className="text-xl">{description}</p>
    </div>
    <div className={'h-56 overflow-clip relative'}>
      <img src={imageUrl} alt={title} className="rounded-b-4xl absolute bottom-0 left-0" />
    </div>
  </div>
);

export default InfoCard;
