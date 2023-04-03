import React from 'react';
import clsx from 'clsx';

import FooterGrid from '../FooterGrid';
import FooterBar from '../FooterBar';

export default function FooterLayout({ style }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container container-fluid">
        <FooterGrid />
        <FooterBar />
      </div>
    </footer>
  );
}
