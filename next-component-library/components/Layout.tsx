import React, { ReactNode } from 'react';
// import Link from 'next/link';
import { LinkComponent } from './Links/Link';
import Head from 'next/head';
import { LinkTypes } from './Links/Link.interfaces';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <LinkComponent href="/" type={LinkTypes.LINK} children="Home" />
        <LinkComponent href="/about" type={LinkTypes.LINK} children="About" />
        <LinkComponent href="/componentLibrary" type={LinkTypes.LINK} children="Component Library List" />
        <LinkComponent href="/api/componentLibrary/library" type={LinkTypes.LINK} children="Component Library API" />
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I am here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
