import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { AccordionProps } from './Accordion.interfaces';

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
      <button
        className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className="inline-block text-footnote light">{title}</p>
        {changeIcon}
      </button>
      <div ref={contentSpace} className="overflow-auto transition-max-height duration-700 ease-in-out" hidden={!active}>
        <div className="pb-10">{content}</div>
      </div>
    </div>
  );
};
