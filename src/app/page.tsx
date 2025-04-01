import { Navbar } from '@/components/Navbar';
import { MessageSquareText, Moon } from 'lucide-react';
import { ButtonMotion } from '@/components/ButtonMotion';
import Link from 'next/link';
import { NavLink } from '@/components/Navlink';
import { Aside } from '@/components/Aside';

export default function Home() {
  return (
    <>
      <Navbar
        brand={
          <Link href="/" className="text-gradient font-bold text-3xl">
            EAP Projetos
          </Link>
        }
        rightButton={
          <>
            <button className="hidden xl:block p-2 text-t-disabled-light group cursor-pointer">
              <Moon className="group-hover:text-t-bright-light" />
            </button>
            <ButtonMotion>
              <span>Vamos Conversa</span>
              <MessageSquareText />
            </ButtonMotion>
          </>
        }
      >
        <NavLink isActive>Início</NavLink>
        <NavLink>Portfólio</NavLink>
        <NavLink>Sobre Mim</NavLink>
        <NavLink>Currículo</NavLink>
        <NavLink>Contato</NavLink>
      </Navbar>
      <Aside
        firstname={'Eduardo'}
        lastname={'Pacheco'}
        specialization={'Dev. Full-Stack'}
        basedIn={'Pará, Brasil'}
      />
    </>
  );
}
