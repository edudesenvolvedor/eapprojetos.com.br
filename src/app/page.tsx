import imgPortfolio1 from '@/assets/image/portfolio_1.png';
import imgPortfolio2 from '@/assets/image/portfolio_2.png';
import imgPortfolio3 from '@/assets/image/portfolio_3.png';
import imgPortfolio4 from '@/assets/image/portfolio_4.png';
import { Blocks, Download, LucideGithub, LucideInstagram, LucideTwitter, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ToolCard } from '@/components/tool-card';
import { Timeline } from '@/components/Timeline';
import { Milestone } from '@/components/Timeline/milestone';
import InfoCard from '@/components/info-card';
import IconCard from '@/components/icon-card';
import { Section } from '@/components/section';
import { KeyMetricCard } from '@/components/key-metric-card';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project-card';
import GridDisplay from '@/components/grid-display';

export default function Home() {
  const tools = [
    {
      name: 'Photoshop',
      icon: 'https://mixdesign.club/themeforest/braxton/img/icons/icon-photoshop.svg',
    },
    {
      name: 'Photoshop',
      icon: 'https://mixdesign.club/themeforest/braxton/img/icons/icon-photoshop.svg',
    },
    {
      name: 'Photoshop',
      icon: 'https://mixdesign.club/themeforest/braxton/img/icons/icon-photoshop.svg',
    },
    {
      name: 'Photoshop',
      icon: 'https://mixdesign.club/themeforest/braxton/img/icons/icon-photoshop.svg',
    },
    {
      name: 'Photoshop',
      icon: 'https://mixdesign.club/themeforest/braxton/img/icons/icon-photoshop.svg',
    },
    {
      name: 'Photoshop',
      icon: 'https://mixdesign.club/themeforest/braxton/img/icons/icon-photoshop.svg',
    },
    {
      name: 'Photoshop',
      icon: 'https://mixdesign.club/themeforest/braxton/img/icons/icon-photoshop.svg',
    },
    {
      name: 'Photoshop',
      icon: 'https://mixdesign.club/themeforest/braxton/img/icons/icon-photoshop.svg',
    },
  ];

  return (
    <>
      <section className="lg:h-screen relative">
        <div className="mt-34 lg:absolute lg:bottom-8 w-full">
          <Badge text="Vamos Conversar!" />
          <h2 className="text-gradient font-bold text-4xl mt-12 md:text-[4rem] 3xl:text-[6rem]">
            Eu Sou Eduardo
            <br />
            Desenvolvedor Full-Stack
          </h2>
          <div className="flex flex-wrap items-center md:space-x-2 mt-16 space-y-4 md:space-y-0">
            <Button
              className={'w-full md:w-auto'}
              icon={<Blocks />}
              iconPosition={'right'}
              variant={'outline'}
              size={'large'}
            >
              Meus Trabalhos
            </Button>
            <Button
              variant="ghost"
              icon={<Download />}
              iconPosition={'right'}
              className="w-full md:w-auto"
              size={'large'}
            >
              Download CV
            </Button>
          </div>
        </div>
      </section>
      <Section badge={<Badge text="Portfólio" />} description={'Confira meus projetos em destaque'}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <ProjectCard
            size={'full'}
            imageSrc={imgPortfolio1}
            labels={[{ text: 'NextJs' }, { text: 'Web Design' }]}
          />
          <ProjectCard
            size={'full'}
            imageSrc={imgPortfolio2}
            labels={[{ text: 'NextJs' }, { text: 'Web Design' }]}
          />
          <ProjectCard
            size={'full'}
            imageSrc={imgPortfolio3}
            labels={[{ text: 'NextJs' }, { text: 'Web Design' }]}
          />
          <ProjectCard
            size={'full'}
            imageSrc={imgPortfolio4}
            labels={[{ text: 'NextJs' }, { text: 'Web Design' }]}
          />
        </div>
      </Section>

      <Section
        badge={<Badge text="Sobre mim" />}
        description={'Transformando problemas complexos em soluções simples'}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <KeyMetricCard title="Clientes" value={'5+'} />
          <KeyMetricCard title="Anos de Experiência" value={'1+'} />
          <KeyMetricCard title="Projetos Finalizados" value={'10+'} />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-4 xl:gap-16 my-16">
          <div className="w-full max-w-5xl md:w-9/12">
            <p className="text-lg sm:text-xl md:text-2xl pb-2 text-t-medium-light">
              Imagine o mundo digital como um vasto oceano de informações e desafios. Minha função é
              ser o navegador experiente, capaz de guiar através das complexidades e transformar
              problemas complexos em soluções simples e diretas. Com uma bússola de lógica e um mapa
              de tecnologias modernas, traço rotas eficientes para entregar aplicações web de alto
              nível.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-t-medium-light mt-2 mb-3">
              Minhas principais ferramentas de navegação incluem a velocidade e versatilidade do
              Next.js e React.js para construir interfaces intuitivas e responsivas, a precisão do
              TypeScript para garantir a segurança e a manutenibilidade do código, e a robustez do
              NestJS para criar back-ends escaláveis e confiáveis. O destino final? Uma experiência
              de usuário clara, eficiente e agradável, onde a complexidade se torna simplicidade.
            </p>
            <Button className="mt-4" icon={<Download />} iconPosition={'right'}>
              Download CV
            </Button>
          </div>
          <div className="w-full space-y-4 md:w-4/12">
            <div className="flex flex-wrap w-full">
              <span className="font-bold text-t-muted-light w-full">Nome</span>
              <span className="font-semibold text-xl text-t-black-light">Eduardo Pacheco</span>
            </div>
            <div className="flex flex-wrap w-full">
              <span className="font-bold text-t-muted-light w-full">Telefone</span>
              <span className="font-semibold text-xl text-t-black-light">+55 91 8556-1718</span>
            </div>
            <div className="flex flex-wrap w-full">
              <span className="font-bold text-t-muted-light w-full">Email</span>
              <span className="font-semibold text-xl text-t-black-light">
                eduardo@eapprojetos.com
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-16">
          <InfoCard
            imageUrl={'https://picsum.photos/1024/1024'}
            title="Front-End"
            description="Desenvolvedor frontend com expertise em HTML, CSS, JavaScript e frameworks modernos como React. Crio interfaces dinâmicas e de alta performance para a web."
            labels={['ReactJs', 'NextJs', 'Blade']}
          />
          <InfoCard
            imageUrl={'https://picsum.photos/1024/1024'}
            title="Back-End"
            description="Com expertise em linguagens como Python, Node.js, Java e bancos de dados como PostgreSQL, MySQL e MongoDB, desenvolvo soluções backend escaláveis e de alta performance."
            labels={['NestJS', 'Express', 'NodeJS', 'Laravel']}
          />
          <InfoCard
            imageUrl={'https://picsum.photos/1024/1024'}
            title="Apis"
            description="Especialista no desenvolvimento de APIs robustas e eficientes. Crio soluções que permitem a comunicação e troca de dados entre diferentes sistemas e aplicações."
            labels={['NestJS', 'Express', 'Laravel']}
          />
          <InfoCard
            imageUrl={'https://picsum.photos/1024/1024'}
            title="Sistemas Personalizados"
            description="Ofereço o desenvolvimento completo de sistemas personalizados, desde a análise de requisitos até a implementação e manutenção. Transformo suas ideias em software funcional e escalável."
            labels={['Soluções', 'Automação']}
          />
        </div>
      </Section>
      <Section
        badge={<Badge text="Currículo" />}
        description={
          'Minha meta é entregar soluções web completas e de alto desempenho, unindo design e funcionalidade de forma harmoniosa.'
        }
      >
        <Timeline title="Minha Educação">
          <Milestone
            year="2015 - 2016"
            title="Drawing Concentration"
            institution="Course by New York Academy of Art"
            description="Intensive drawing courses that present the fundamental principles of drawing."
          />
          <Milestone
            year="2015 - 2016"
            title="Drawing Concentration"
            institution="Course by New York Academy of Art"
            description="Intensive drawing courses that present the fundamental principles of drawing."
          />
          <Milestone
            year="2015 - 2016"
            title="Drawing Concentration"
            institution="Course by New York Academy of Art"
            description="Intensive drawing courses that present the fundamental principles of drawing."
          />
        </Timeline>
        <Timeline title="Meus Trabalhos">
          <Milestone
            year="2015 - 2016"
            title="Drawing Concentration"
            institution="Course by New York Academy of Art"
            description="Intensive drawing courses that present the fundamental principles of drawing."
          />
          <Milestone
            year="2015 - 2016"
            title="Drawing Concentration"
            institution="Course by New York Academy of Art"
            description="Intensive drawing courses that present the fundamental principles of drawing."
          />
          <Milestone
            year="2015 - 2016"
            title="Drawing Concentration"
            institution="Course by New York Academy of Art"
            description="Intensive drawing courses that present the fundamental principles of drawing."
          />
        </Timeline>
        <GridDisplay title={'Minhas Ferramentas'} columns={'six'}>
          {tools.map((tool, index) => (
            <ToolCard key={index} name={tool.name} icon={tool.icon} />
          ))}
        </GridDisplay>
      </Section>

      <Section
        badge={<Badge text="Contato" />}
        description={
          'Tem alguma dúvida ou gostaria de saber mais sobre meus serviços? Entre em contato através do formulário abaixo.'
        }
      >
        <form className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Seu nome..." />
            <Input placeholder="Seu telefone ..." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Seu email ..." />
            <Input placeholder="Assunto ..." />
          </div>
          <Textarea placeholder="Sua mensagem..."></Textarea>
          <Button
            type={'submit'}
            className={'w-full md:w-auto'}
            icon={<Send />}
            iconPosition={'right'}
          >
            Enviar
          </Button>
        </form>
        <GridDisplay columns={'three'}>
          <IconCard>
            <LucideGithub size={64} />
          </IconCard>
          <IconCard>
            <LucideInstagram size={64} />
          </IconCard>
          <IconCard>
            <LucideTwitter size={64} />
          </IconCard>
        </GridDisplay>
        <p className="mt-18 xl:mt-4 font-bold text-3xl xl:text-5xl text-gradient xl:py-24 leading-tight">
          Possui uma ideia incrível para uma aplicação web? Sou Desenvolvedor Full-Stack com
          expertise em Next.js, React.js, TypeScript e NestJS, e estou sempre buscando novas
          oportunidades para colaborar e dar vida a projetos inovadores. Compartilhe seus desafios e
          ambições através do formulário de contato, e vamos juntos construir algo extraordinário
        </p>
      </Section>

      <footer className="xl:mt-8 border-t border-stroke-elements-light py-8 pb-32">
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex flex-wrap *:w-full">
            <span className="font-bold text-t-muted-light">Location</span>
            <span className="font-semibold text-xl text-t-black-light">Belém, Pará</span>
          </div>
          <div className="flex flex-wrap *:w-full">
            <span className="font-bold text-t-muted-light">Telefone</span>
            <span className="font-semibold text-xl text-t-black-light">+55 91 98556-1718</span>
          </div>
          <div className="flex flex-wrap *:w-full">
            <span className="font-bold text-t-muted-light">Email</span>
            <span className="font-semibold text-xl text-t-black-light">
              eduardo@eapprojetos.com.br
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
