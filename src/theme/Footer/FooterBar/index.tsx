import React, { ReactNode } from 'react';
import Link from '@docusaurus/Link';

import Discord from '@site/static/img/discord.svg';
import GitHub from '@site/static/img/github.svg';
import Twitter from '@site/static/img/twitter.svg';

const FooterBarLink = ({
  href,
  children,
}: {
  href?: string;
  children?: ReactNode;
}) => (
  <Link
    className="block text-grey-500 hover:text-grey-500 mt-3 first-of-type:mt-0 md:inline-block md:mr-10"
    href={href}
    children={children}
  />
);

const FooterBar = () => (
  <section className="grid grid-flow-row mx-auto pt-8 pb-6 md:pt-10 md:grid-flow-col md:auto-cols-fr md:max-w-6xl">
    <div className="md:col-span-2">
      <FooterBarLink href="https://colony.io/terms-of-service">
        Terms of Service
      </FooterBarLink>
      <FooterBarLink href="https://colony.io/terms-of-service#pivacy-policy">
        Privacy Policy
      </FooterBarLink>
      <FooterBarLink href="https://colony.notion.site/Brand-assets-guide-downloads-01c7f5a924a04120bcfa4b377e86e856">
        Media Kit
      </FooterBarLink>
    </div>
    <div className="mt-8 md:mt-0 md:text-right md:col-span-1">
      <Link
        className="inline-block w-8 h-8"
        href="https://discord.gg/feVZWwysqM"
      >
        <Discord className="w-full fill-grey-500 transition-color hover:fill-white" />
      </Link>
      <Link
        className="inline-block w-8 ml-6"
        href="https://github.com/JoinColony/"
      >
        <GitHub className="w-full fill-grey-500 transition-color hover:fill-white" />
      </Link>
      <Link
        className="inline-block w-8 h-8 ml-6"
        href="https://twitter.com/JoinColony/"
      >
        <Twitter className="w-full fill-grey-500 transition-color hover:fill-white" />
      </Link>
    </div>
  </section>
);

export default FooterBar;
