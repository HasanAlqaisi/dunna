import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAllModules } from '@/utils/helpers';
import { Module } from '@/types';

export const getStaticProps: GetStaticProps = (ctx) => {
  const modules: Module[] = getAllModules();

  return { props: { modules } };
};

interface HomeProps {
  modules: Module[];
}

const Home = ({ modules }: HomeProps) => {
  return (
    <div>
      {modules.map((module, i) => (
        <h1 key={i}>
          <Link href={`/modules/${module.name}`}>{module.title}</Link>
        </h1>
      ))}
    </div>
  );
};

export default Home;
