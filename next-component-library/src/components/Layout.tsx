import React, { ReactNode, useState } from 'react';
import { Button } from './Button/Button';
import Head from 'next/head';
import { transformDataToPaginationHtml } from '../../utils/sample-data';
import { Modal } from './Modal/Modal';
import { LinkComponent as Link } from './Link/Link';
import { AccordionItem } from './Accordion/AccordionItem';
import { AccordionWrapper } from './Accordion/AccordionWrapper';
import { Pagination } from './Pagination/Pagination';

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
          <Link href="/index" children="Home" />
          <Link href="/about" children="About" />
          <Link href="/list" children="Component Library List" />
          <Link href="/api" children="Component Library API" />
        </nav>
      </header>
      {children}
      <AccordionWrapper>
        <AccordionItem title="Section 1" content={contentP} />
        <AccordionItem title="Section 2" content={contentP} />
      </AccordionWrapper>
      <Button data-id="openModal" onClick={() => setShowModal(true)} onKeyDown={() => setShowModal(true)}>
        Open Modal
      </Button>
      {/* {displayPageDiv} */}
      <Pagination itemsPerPage={6} dataArray={transformDataToPaginationHtml()} startingPage={1} />
      <Modal onClose={() => setShowModal(false)} show={showModal} title="Modal Header">
        <div>
          <h3>Modal Body</h3>
          <p>Modal Paragraph - {contentP}</p>
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
