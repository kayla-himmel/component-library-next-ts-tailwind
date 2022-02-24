import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { AccordionProps } from './Accordion.interfaces';
import { Button } from '../Button/Button';
import { LinkTypes } from '../Button/Button.interfaces';

export const AccordionItem: React.FC<AccordionProps> = ({ title, content }) => {
  // state of current section (defaults to false, which means closed)
  const [active, setActive] = useState(false);

  // the content of the current section when open
  const contentSpace = useRef<HTMLDivElement>(null);

  // toggle function to set current section's active state to true or false
  function toggleAccordion() {
    setActive(active === false ? true : false);
  }

  // swap + and - sign based on whether the current section is active or not
  const changeIcon = active ? (
    <Image width="24" height="24" src="/assets/iconMinusSign.svg" alt="Close this accordion section" />
  ) : (
    <Image width="24" height="24" src="/assets/iconPlusSign.svg" alt="Open this accordion section" />
  );

  return (
    <div className="flex flex-col">
      <Button
        className="py-6 px-0 box-border appearance-none border-0 flex items-center justify-between"
        onClick={toggleAccordion}
        href="/"
        type={LinkTypes.BUTTON}
        ariaExpanded={active}
      >
        <h3 className="inline-block text-4xl font-bold">{title}</h3>
        {changeIcon}
      </Button>
      <div ref={contentSpace} className="overflow-auto transition-max-height duration-700 ease-in-out" hidden={!active}>
        <div className="pb-10 pr-6">{content}</div>
      </div>
    </div>
  );
};
