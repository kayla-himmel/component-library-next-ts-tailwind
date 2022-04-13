import React, { useState } from 'react';
import Image from 'next/image';
import { AccordionProps } from './Accordion.interfaces';
import { Button } from '../Button/Button';
import { trimWhiteSpace } from '../../../utils/helper';

export const AccordionSection: React.FC<AccordionProps> = ({ title, content }) => {
  // state of current section (defaults to false, which means closed)
  const [active, setActive] = useState(false);

  // toggle function to set current section's active state to true or false
  function toggleAccordion() {
    setActive(active === false ? true : false);
  }

  // swap + and - sign based on whether the current section is active or not
  const changeIcon = active ? (
    <Image
      className="grid col-span-1 justify-self-end text-right"
      width="24"
      height="24"
      src="/assets/iconMinusSign.svg"
      alt="Close this accordion section"
    />
  ) : (
    <Image
      className="grid col-span-1 justify-self-end text-right"
      width="24"
      height="24"
      src="/assets/iconPlusSign.svg"
      alt="Open this accordion section"
    />
  );

  return (
    <section className="flex flex-col">
      <Button
        className="py-6 px-0 border-white grid grid-cols-8 md:grid-cols-12 gap-3 items-center justify-between"
        onClick={toggleAccordion}
        onKeyDown={toggleAccordion}
        aria-expanded={active}
        aria-controls="accordion-content-button"
      >
        <h3 className="col-span-7 md:col-span-11 text-left text-3xl md:text-4xl font-bold">{title}</h3>
        <div className="grid justify-end align-middle">{changeIcon}</div>
      </Button>
      <div
        className="overflow-auto transition-max-height duration-700 ease-in-out"
        id={`accordion-content-${trimWhiteSpace(title)}`}
        hidden={!active}
      >
        <div className="pb-10 pr-6">{content}</div>
      </div>
    </section>
  );
};
