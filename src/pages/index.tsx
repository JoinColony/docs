import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';

import Books from '@site/static/img/books.svg';
import Code from '@site/static/img/code.svg';
import Hat from '@site/static/img/hat.svg';
import BackgroundShape1 from '@site/static/img/bg-gradient-1.svg';
import BackgroundShape2 from '@site/static/img/bg-gradient-2.svg';
import BackgroundShape3 from '@site/static/img/bg-gradient-3.svg';
import Discord from '@site/static/img/discord.svg';
import GitHub from '@site/static/img/github.svg';
import Twitter from '@site/static/img/twitter.svg';

import Link from '@docusaurus/Link';
import styles from './index.module.css';

const MainLink = ({
  className,
  children,
  href,
}: {
  className: string;
  children: ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className={`${className} inline-block font-sans text-sm py-4 px-10 rounded-full text-white tracking-normal bg-transparent border border-solid cursor-pointer transition-colors hover:no-underline`}
  >
    {children}
  </Link>
);

const Home = () => (
  <Layout
    title="Welcome"
    description="Explore the vast possibilities of the Colony Network"
  >
    <main className="grow bg-blue-800 font-sans">
      <div className="container relative mx-auto text-center mt-10 md:mt-40 z-10">
        <h1 className="mb-6 text-3xl text-white font-extrabold leading-none tracking-normal md:text-5xl lg:text-6xl">
          Welcome to Colony Docs
        </h1>
        <p className="leading-7 text-white mx-auto tracking-normal md:text-lg mb-10 md:max-w-3xl md:mb-20">
          Colony is the best way to build online organizations.
          <br />
          <br />
          These docs serve as a reference guide to building DAOs with Colony. Be sure to join Colony's Discord community to connect
          with other DAO builders and get support.
        </p>
        <section className="grid grid-flow-row gap-4 mx-auto md:gap-8 md:grid-flow-col md:auto-cols-fr md:max-w-6xl">
          <article className="p-6 bg-blue-900 text-left md:p-8">
            <Hat className="stroke-blue-400 mb-8 md:mb-14" />
            <h3 className="text-sm font-normal text-blue-400 font-mono tracking-normal">
              — For everyone
            </h3>
            <h2 className="text-2xl text-white leading-none tracking-normal xl:text-3xl">
              Learn about Colony
            </h2>
            <MainLink
              href="/learn"
              className="border-blue-400 hover:bg-blue-400 hover:text-blue-900"
            >
              Learn
            </MainLink>
          </article>
          <article className="p-6 bg-blue-900 text-left md:p-8">
            <Books className="stroke-purple mb-8 md:mb-14" />
            <h3 className="text-sm font-normal text-purple font-mono tracking-normal">
              — For everyone
            </h3>
            <h2 className="text-2xl text-white leading-none tracking-normal xl:text-3xl">
              Build a DAO
            </h2>
            <MainLink
              href="/use"
              className="border-purple hover:bg-purple hover:text-blue-900"
            >
              Start building
            </MainLink>
          </article>
          <article className="p-6 bg-blue-900 text-left md:p-8">
            <Code className="stroke-pink mb-8 md:mb-14" />
            <h3 className="text-sm font-normal text-pink font-mono tracking-normal">
              — For developers
            </h3>
            <h2 className="text-2xl text-white leading-none tracking-normal xl:text-3xl">
              Develop on Colony
            </h2>
            <MainLink
              href="develop"
              className="border-pink hover:bg-pink hover:text-blue-900"
            >
              Get started
            </MainLink>
          </article>
        </section>
        <section className="my-8 md:mt-48">
          <h2 className="font-mono font-normal text-blue-400 text-lg tracking-normal md:text-xl">
            Need guidance?
          </h2>
          <h1 className="font-semibold text-white text-2xl tracking-normal mx-auto md:text-4xl md:max-w-lg">
            Our team and community are here to help.
          </h1>
          <div className="mt-6 md:mt-8">
            <Link href="https://discord.gg/feVZWwysqM">
              <Discord className="w-8 fill-blue-400 transition-color md:w-14 hover:fill-white" />
            </Link>
            <Link href="https://github.com/JoinColony/">
              <GitHub className="w-8 fill-blue-400 ml-10 transition-color md:w-14 hover:fill-white" />
            </Link>
            <Link href="https://twitter.com/JoinColony/">
              <Twitter className="w-8 fill-blue-400 ml-10 transition-color md:w-14 hover:fill-white" />
            </Link>
          </div>
        </section>
      </div>
    </main>
    <BackgroundShape1 className={styles.bgShape1} />
    <BackgroundShape2 className={styles.bgShape2} />
    <BackgroundShape3 className={styles.bgShape3} />
  </Layout>
);

export default Home;
