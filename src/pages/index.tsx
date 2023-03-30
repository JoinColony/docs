// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Hat from '@site/static/img/education_hat.svg';
import BackgroundShape1 from '@site/static/img/bg-gradient-1.svg';
import BackgroundShape2 from '@site/static/img/bg-gradient-2.svg';
import BackgroundShape3 from '@site/static/img/bg-gradient-3.svg';

import styles from './index.module.css';

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/colonysdk/getting-started"
//           >
//             Start building now 🏗
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home(): JSX.Element {
//   return (
//     <Layout
//       title="Welcome"
//       description="Explore the vast possibilities of the Colony Network">
//       <HomepageHeader />
//       <main>
//         <div className="bg-red-500 dark:bg-yellow-500">this is tailwind!</div>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/learn/">
//             New to Colony? Start here
//           </Link>
//         </div>
//       </main>
//     </Layout>
//   );
// }

const Home = () => (
  <Layout
    title="Welcome"
    description="Explore the vast possibilities of the Colony Network"
  >
    <main className="grow bg-navy">
      <div className="container mx-auto text-center mt-40">
        <h1 className="mb-6 text-6xl font-extrabold leading-none tracking-tight md:text-5xl text-white">
          Welcome to Colony Docs
        </h1>
        <p className="text-lg leading-7 text-white max-w-2xl mx-auto">
          Colony is the best way to build online organizations.
          <br />
          These docs serve as a reference guide to using Colony. Be sure to join
          Colony's Discord community to get support and connect with other DAO
          builders.
        </p>
        <Hat className="stroke-purple-900" />
        <BackgroundShape1 className={styles.bgShape1} />
        <BackgroundShape2 className={styles.bgShape2} />
        <BackgroundShape3 className={styles.bgShape3} />
      </div>
    </main>
  </Layout>
);

export default Home;
