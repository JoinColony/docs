import React, { ReactNode } from 'react';
import Link from '@docusaurus/Link';

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
  <section className="mx-auto pt-8 pb-6 md:pt-10 md:max-w-6xl">
    <FooterBarLink href="https://colony.io/terms-of-service">
      Terms of Service
    </FooterBarLink>
    <FooterBarLink href="https://colony.io/terms-of-service#pivacy-policy">
      Privacy Policy
    </FooterBarLink>
    <FooterBarLink href="https://colony.notion.site/Brand-assets-guide-downloads-01c7f5a924a04120bcfa4b377e86e856">
      Media Kit
    </FooterBarLink>
  </section>
);

export default FooterBar;
