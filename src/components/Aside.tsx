import { LucideGithub, LucideInstagram, LucideZap, MessageSquareText, Users2 } from 'lucide-react';
import { ButtonMotion } from '@/components/ButtonMotion';

export const Aside = () => {
  return (
    <>
      <div className="fixed border border-stroke-elements-light bg-base-light mx-4 rounded-xl space-y-4 p-8">
        <div className="px-4 py-2 text-2xl font-extrabold text-gradient flex items-center space-x-3">
          <span className="p-3 border rounded-3xl border-accent-light">
            <LucideZap size={30} className="text-accent-light" />
          </span>
          <span>
            <span>Eduardo</span>
            <br />
            <span>Pacheco</span>
          </span>
        </div>
        <div className="flex">
          <div className="bg-white mx-auto p-32 rounded-4xl max-w-2xs">
            <Users2 />
          </div>
        </div>
        <div className="px-4">
          <div className="text-t-muted-light">Especialização:</div>
          <div className="font-bold text-lg text-t-medium-light">Dev. Full-Stack</div>
        </div>
        <div className="px-4">
          <div className="text-t-muted-light">Localização:</div>
          <div className="font-bold text-lg text-t-medium-light">Pará, Brasil</div>
        </div>
        <div className="flex items-center justify-between px-4 *:hover:cursor-pointer">
          <button className="border border-stroke-elements-light p-3 rounded-3xl">
            <LucideGithub />
          </button>
          <button className="border border-stroke-elements-light p-3 rounded-3xl">
            <LucideZap />
          </button>
          <button className="border border-stroke-elements-light p-3 rounded-3xl">
            <LucideInstagram />
          </button>
        </div>
        <div className="px-4">
          <ButtonMotion>
            <span>Vamos Trabalhar Juntos!</span>
            <MessageSquareText />
          </ButtonMotion>
        </div>
      </div>
    </>
  );
};
