import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { AccordionProps } from './Accordion.interfaces';
import { LinkTypes } from '../Button/Button.interfaces';
import { Button } from '../Button/Button';

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
    <section className="flex flex-col">
      <Button
        className="accordion-item py-6 pl-0 pr-0 border-white flex items-center justify-between"
        onClick={toggleAccordion}
        type={LinkTypes.BUTTON}
        aria-expanded={active}
        aria-controls="accordion-content"
      >
        <h3 className="accordion-item--title inline-block text-4xl font-bold">{title}</h3>
        {changeIcon}
      </Button>
      <div
        ref={contentSpace}
        className="accordion-item--content overflow-auto transition-max-height duration-700 ease-in-out"
        id="accordion-content"
        hidden={!active}
      >
        <div className="pb-10 pr-6">{content}</div>
      </div>
    </section>
  );
};
