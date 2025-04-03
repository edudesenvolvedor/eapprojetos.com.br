import { LucideGithub, LucideInstagram, LucideZap, MessageSquareText } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/AsideAvatar/Avatar';

interface IProps extends VariantProps<typeof style> {
  firstname: string;
  lastname: string;
  specialization: string;
  basedIn: string;
}

const style = cva(
  'mt-34 sm:mx-auto xl:mt-auto lg:fixed bg-base-tint-light border border-stroke-elements-light bg-base-light mx-4 rounded-xl space-y-4 p-2 md:p-8 lg:p-8 top-8 left-14 lg:left-4 lg:mt-18 xl:left-4 2xl:left-28 max-w-96 lg:max-w-72 xl:max-w-96',
  {
    variants: {
      size: {
        small: 'p-4 md:p-6',
        medium: 'p-6 md:p-8',
        large: 'p-8 md:p-10',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
);

export const AsideAvatar: FC<IProps> = ({
  firstname,
  lastname,
  specialization,
  basedIn,
  size,
}: IProps) => {
  return (
    <aside className={style({ size })}>
      <div className="px-4 py-2 text-2xl font-extrabold text-gradient flex items-center space-x-3">
        <span className="p-3 border rounded-3xl border-accent-light">
          <LucideZap size={30} className="text-accent-light" />
        </span>
        <span>
          <span>{firstname}</span>
          <br />
          <span>{lastname}</span>
        </span>
      </div>
      <Avatar src={'https://github.com/edudesenvolvedor.png'} alt={'Perfil de edudesenvolvedor'} />

      <div className="px-4">
        <div className="text-t-muted-light">Especialização:</div>
        <div className="font-bold text-lg text-t-medium-light">{specialization}</div>
      </div>
      <div className="px-4">
        <div className="text-t-muted-light">Localização:</div>
        <div className="font-bold text-lg text-t-medium-light">{basedIn}</div>
      </div>
      <div className="flex items-center justify-between px-4 *:hover:cursor-pointer">
        {[LucideGithub, LucideZap, LucideInstagram].map((Icon, index) => (
          <button key={index} className="border border-stroke-elements-light p-3 rounded-3xl">
            <Icon />
          </button>
        ))}
      </div>
      <div className="px-4">
        <Button
          className="w-full text-[11px] sm:text-lg lg:text-[10px] xl:text-lg text-center"
          icon={<MessageSquareText />}
          iconPosition="right"
        >
          Vamos Trabalhar Juntos!
        </Button>
      </div>
    </aside>
  );
};
