import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { AccordionProps } from './Accordion.interfaces';

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  // state of current section (defaults to false, which means closed)
  const [active, setActive] = useState(false);
  // state of currect section's visibility (hides the content by setting height to 0px when closed)
  const [height, setHeight] = useState('0px');
  // the content of the current section when open
  const contentSpace = useRef<HTMLDivElement>(null);

  // toggle function to set current section's active state to true or false
  function toggleAccordion() {
    setActive(active === false ? true : false);
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
  }

  // swap + and - sign based on whether the current section is active or not
  const changeIcon = active ? (
    <Image width="44" height="44" src="/assets/iconMinusSign.svg" alt="Close this accordion section" />
  ) : (
    <Image width="44" height="44" src="/assets/iconPlusSign.svg" alt="Open this accordion section" />
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
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-700 ease-in-out"
      >
        <div className="pb-10">{content}</div>
      </div>
    </div>
  );
};
