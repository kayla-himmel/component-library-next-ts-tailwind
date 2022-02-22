import React, { ReactNode } from 'react';
import { Button } from './Button/Button';
import Head from 'next/head';
import { LinkTypes } from './Button/Button.interfaces';
import { Modal } from './Modal/Modal';

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
        <Button href="/" type={LinkTypes.LINK} children="Home" />
        <Button href="/about" type={LinkTypes.LINK} children="About" />
        <Button href="/componentLibrary" type={LinkTypes.LINK} children="Component Library List" />
        <Button href="/api/componentLibrary/library" type={LinkTypes.LINK} children="Component Library API" />
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I am here to stay (Footer)</span>
    </footer>
    <div id="modalRoot" />
  </div>
);

export default Layout;
