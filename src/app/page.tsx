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
  const myWorks = [
    {
      year: 'Jan/2024 – Até o momento',
      title: 'EAP Projetos',
      label: 'Freelancer',
      description:
        'Elaboração de projetos de telecomunicações focados em enlace e redes de acesso por rádio (RAN), unindo experiência em TI e telecomunicações para oferecer soluções integradas e eficientes.',
    },
    {
      year: 'Ago/2023 - Ago/2024',
      title: 'AFL Engenharia',
      label: 'Coordenador de documentações',
      description:
        'Coordenei uma equipe responsável pela elaboração de projetos de remanejamento e instalação de equipamentos, incluindo Estações Rádio Base (ERB) e Rádio Enlace, para os principais fornecedores do mercado, como Nokia, Ericsson, ZTE, Huawei e NEC, atendendo às operadoras Claro, TIM e VIVO. Minha atuação abrangeu a supervisão do planejamento técnico, garantindo a conformidade com os padrões de qualidade e os prazos estabelecidos, além de assegurar a eficiência nos processos de implantação e integração dos novos equipamentos.',
    },
    {
      year: 'Out/2022 – Ago/2023',
      title: 'Engefix Telecom',
      label: 'Analista de telecomunicações',
      description:
        'Supervisionei equipes em campo durante a elaboração de relatórios técnicos e o processo de instalação de equipamentos de telecomunicações ERBs no projeto da Ericsson para as operadoras TIM e VIVO. Atuei garantindo o cumprimento dos padrões de qualidade e segurança, assegurando a precisão nas documentações e a eficiência na instalação dos dispositivos, alinhando o trabalho da equipe aos requisitos do projeto e às expectativas dos clientes.',
    },
    {
      year: 'Jul/2022 - Out/2022',
      title: 'Engefix Telecom',
      label: 'Estágio',
      description:
        'Estágio extra-curricular com duração de 3 meses junto ao Departamento de Qualidade',
    },
  ];

  const myEducations = [
    {
      year: '2022 - Até o momento - (EAD)',
      title: 'Barcharel em Engenharia de Software',
      label: 'Faculdade Unopar',
      description:
        'Programação (diversas linguagens), estruturas de dados e algoritmos, design e arquitetura de software, bancos de dados, testes de software projetar, desenvolver e manter sistemas de software complexos.',
    },

    {
      year: '2024 - 360h',
      title: 'MBA em Gestão Empresarial',
      label: 'Faculdade Anhanguera',
      description:
        'Estratégia empresarial, finanças e contabilidade, marketing e vendas, operações e logística, gestão de pessoas desenvolver liderança e visão estratégica para gerenciar negócios.',
    },

    {
      year: '2023 - 360h',
      title: 'Pós-Graduação em Desenvolvimento Full-Stack',
      label: 'Faculdade Anhanguera',
      description:
        'Desenvolvimento front-end (HTML, CSS, JavaScript, React), desenvolvimento back-end (Java/Node.js, Spring/NestJS), bancos de dados (SQL e NoSQL) construir e gerenciar aplicações web completas.',
    },
    {
      year: '2023 - 360h',
      title: 'Pós-Graduação em Engenharia e Gestão de Projetos e Qualidade',
      label: 'Faculdade Anhanguera',
      description:
        'Gestão da qualidade (ferramentas, normas, controle estatístico), gestão de projetos (planejamento, execução, controle) implementar e gerenciar projetos e sistemas de qualidade em engenharia.',
    },
    {
      year: '2018 - 2022',
      title: 'CST em Sistemas de Telecomunicações',
      label: 'IFPA',
      description:
        'Redes de comunicação, transmissão de dados e infraestrutura de TIC implementar, gerenciar e manter sistemas de telecomunicações.',
    },
  ];

  const programmingLanguages = [
    {
      name: 'Typescript',
      icon: 'https://www.svgrepo.com/show/354478/typescript-icon.svg',
    },
    {
      name: 'Javascript',
      icon: 'https://www.svgrepo.com/show/353925/javascript.svg',
    },
    {
      name: 'PHP',
      icon: 'https://www.svgrepo.com/show/349474/php.svg',
    },
  ];

  const frameworks = [
    {
      name: 'NestJS',
      icon: 'https://www.svgrepo.com/show/373872/nestjs.svg',
    },
    {
      name: 'Express',
      icon: 'https://www.svgrepo.com/show/330398/express.svg',
    },
    {
      name: 'NextJS',
      icon: 'https://www.svgrepo.com/show/378440/nextjs-fill.svg',
    },
    {
      name: 'Laravel',
      icon: 'https://www.svgrepo.com/show/353985/laravel.svg',
    },
  ];

  const libs = [
    {
      name: 'ReactJS',
      icon: 'https://www.svgrepo.com/show/452092/react.svg',
    },
    {
      name: 'TypeORM',
      icon: 'https://cdn.svgporn.com/logos/typeorm.svg',
    },
    {
      name: 'Prisma',
      icon: 'https://www.svgrepo.com/show/354210/prisma.svg',
    },
    {
      name: 'Mongodb',
      icon: 'https://www.svgrepo.com/show/373845/mongo.svg',
    },
    {
      name: 'Mysql',
      icon: 'https://www.svgrepo.com/show/342053/mysql.svg',
    },
    {
      name: 'Postgresql',
      icon: 'https://www.svgrepo.com/show/303301/postgresql-logo.svg',
    },
    {
      name: 'Styled Components',
      icon: 'https://www.svgrepo.com/show/374104/styled.svg',
    },
    {
      name: 'Tailwind',
      icon: 'https://www.svgrepo.com/show/374118/tailwind.svg',
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
          {myEducations.map((milestone, index) => (
            <Milestone key={index} {...milestone} />
          ))}
        </Timeline>
        <Timeline title="Meus Trabalhos">
          {myWorks.map((work, index) => (
            <Milestone key={index} {...work} />
          ))}
        </Timeline>
        <GridDisplay title={'Linguagens'} columns={'six'}>
          {programmingLanguages.map((language, index) => (
            <ToolCard key={index} {...language} />
          ))}
        </GridDisplay>
        <GridDisplay title={'Frameworks'} columns={'six'}>
          {frameworks.map((framework, index) => (
            <ToolCard key={index} {...framework} />
          ))}
        </GridDisplay>
        <GridDisplay title={'Bibliotecas'} columns={'six'}>
          {libs.map((lib, index) => (
            <ToolCard key={index} {...lib} />
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
