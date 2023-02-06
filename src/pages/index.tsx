import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/colonysdk/getting-started">
            Start building now 🏗
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Welcome"
      description="Explore the vast possibilities of the Colony Network">
      <HomepageHeader />
      <main>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/learn/">
            New to Colony? Start here
          </Link>
        </div>
      </main>
    </Layout>
  );
}
