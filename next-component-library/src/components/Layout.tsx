import React, { ReactNode, useState } from 'react';
import { Button } from './Button/Button';
import Head from 'next/head';
import { LinkTypes } from './Button/Button.interfaces';
import { Modal } from './Modal/Modal';
import { AccordionItem } from './Accordion/AccordionItem';
import { AccordionWrapper } from './Accordion/AccordionWrapper';

type Props = {
  children?: ReactNode;
  title?: string;
};

const contentP =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
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
      <AccordionWrapper>
        <AccordionItem title="Section 1" content={contentP} />
        <AccordionItem title="Section 2" content={contentP} />
      </AccordionWrapper>
      <Button type={LinkTypes.BUTTON} onClick={() => setShowModal(true)}>
        Open Modal
      </Button>
      <Modal onClose={() => setShowModal(false)} show={showModal} title="Modal Header">
        <div>
          <h3>Modal Body</h3>
          <p>Modal Paragraph - {contentP}</p>
          <Button href="/test" type={LinkTypes.BUTTON} children="Test" />
        </div>
      </Modal>
      <footer>
        <hr />
        <span>I am here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
