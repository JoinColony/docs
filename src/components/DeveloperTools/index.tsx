import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  logo: string;
  description: JSX.Element;
  link: string;
  color: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Colony SDK',
    logo: 'https://raw.githubusercontent.com/JoinColony/brand/v1.0.0/logo_sdk_no_padding.svg',
    description: (
      <>
        "Just add <s>water</s> MetaMask" toolbox for the most common Colony workflows. Start here if you're new 🚀
      </>
    ),
    link: '/colonysdk',
    color: '#19A582',
  },
  {
    title: 'Colony Network',
    logo: 'https://raw.githubusercontent.com/JoinColony/brand/v1.0.0/logo_network_no_padding.svg',
    description: (
      <>
        The Colony Smart Contracts in all their glory. Freshly tested. Upgradable. Ready for you!
      </>
    ),
    link: '/colonynetwork',
    color: '#289BDC',
  },
  {
    title: 'ColonyJS',
    logo: 'https://raw.githubusercontent.com/JoinColony/brand/v1.0.0/logo_js_no_padding.svg',
    description: (
      <>
        Our reference client implementation, written in TypeScript. Battle-tested in our Dapp, it gives you all the features the Colony Network has to offer.
      </>
    ),
    link: '/colonyjs',
    color: '#F5416E',
  },
];

function Feature({title, logo, description, link, color}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}><img src={logo} className={styles.featureSvg} /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={link} style={{ color }}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function DeveloperTools(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
