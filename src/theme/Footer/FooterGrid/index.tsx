import React, { ReactNode } from 'react';

import Logomark from '@site/static/img/logomark.svg';
import Link from '@docusaurus/Link';

const FooterLink = ({
  href,
  children,
}: {
  href?: string;
  children?: ReactNode;
}) => (
  <Link
    className="block text-white hover:text-white mt-3 first-of-type:mt-0"
    href={href}
    children={children}
  />
);

const FooterGrid = () => (
  <section className="grid grid-flow-row mx-auto pt-8 pb-6 md:pt-10 md:grid-flow-col md:auto-cols-fr md:max-w-6xl">
    <div>
      <FooterLink href="https://colony.io">
        <Logomark className="w-8 h-8 md:w-12 md:h-12" />
        <span className="block text-white">Visit Colony</span>
      </FooterLink>
    </div>
    <div className="mt-8 md:mt-0">
      <h1 className="text-base">Learn</h1>
      <FooterLink href="/learn/why-colony">Why Colony?</FooterLink>
      <FooterLink href="/learn/governance/reputation">Reputation</FooterLink>
      <FooterLink href="/learn/payments-and-tokens/the-metacolony-clny">
        The Metacolony and CLNY
      </FooterLink>
    </div>
    <div className="mt-8 md:mt-0">
      <h1 className="text-base">Use</h1>
      <FooterLink href="/use/launch-a-colony">Launching a Colony</FooterLink>
      <FooterLink href="/use/managing-funds/mint-tokens">
        Minting Tokens
      </FooterLink>
      <FooterLink href="/use/governance/motions-and-disputes/creating-a-motion">
        Creating a Motion
      </FooterLink>
    </div>
    <div className="mt-8 md:mt-0">
      <h1 className="text-base">Develop</h1>
      <FooterLink href="/colonysdk">Colony SDK</FooterLink>
      <FooterLink href="/colonynetwork">Colony Network</FooterLink>
      <FooterLink href="/colonyjs">Colony JS</FooterLink>
      <FooterLink href="/colonynetwork/bug-bounty">
        Bug Bounty Program
      </FooterLink>
    </div>
  </section>
);

export default FooterGrid;
