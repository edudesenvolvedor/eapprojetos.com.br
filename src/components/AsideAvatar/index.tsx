'use client';

import { LucideZap } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/AsideAvatar/avatar';
import { ChatDots, GithubLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';

interface IProps extends VariantProps<typeof style> {
  firstname: string;
  lastname: string;
  specialization: string;
  basedIn: string;
}

const style = cva(
  'mt-34 sm:mx-auto xl:mt-auto lg:fixed bg-base-tint-light border border-stroke-elements-light bg-base-light mx-4 rounded-xl space-y-4 p-2 md:p-8 lg:p-8 top-8 left-14 lg:left-4 lg:mt-18 xl:left-4 2xl:left-10 max-w-96 lg:max-w-72 xl:max-w-96',
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
  const links = [
    {
      icon: GithubLogo,
      href: 'https://github.com/edudesenvolvedor',
    },
    {
      icon: LinkedinLogo,
      href: 'https://www.linkedin.com/in/edudesenvolvedor',
    },
    {
      icon: WhatsappLogo,
      href: 'https://wa.me/5591985561718?text=Ol%C3%A1!%20Vi%20o%20site%20da%20EAP%20Projetos%20e%20quero%20saber%20mais%20sobre%20como%20voc%C3%AA%20podem%20ajudar%20minha%20empresa%20com%20solu%C3%A7%C3%B5es%20de%20TI.',
    },
  ];

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
        {links.map((link, index) => (
          <Button
            as={'a'}
            target={'_blank'}
            href={link.href}
            variant={'outline'}
            size={'default'}
            className={'p-3 text-lg lg:text-3xl rounded-xl before:rounded-xl'}
            key={index}
          >
            <link.icon />
          </Button>
        ))}
      </div>
      <div className="px-4">
        <Button
          as={'a'}
          href={'#contato'}
          className="w-full text-[11px] sm:text-lg lg:text-[10px] xl:text-lg text-center"
          icon={<ChatDots className={'text-xl'} weight={'bold'} />}
          iconPosition="right"
        >
          Vamos Trabalhar Juntos!
        </Button>
      </div>
    </aside>
  );
};
