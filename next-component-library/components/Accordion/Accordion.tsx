import { Button } from '../Button/Button';
import Image from 'next/image';
import { LinkTypes } from '../Button/Button.interfaces';
import { AccordionProps } from './Accordion.interfaces';

export const Accordion: React.FC<AccordionProps> = ({ sectionId, children }) => {
  // default sections to closed
  const sectionOpen = false;

  // Populate sections
  function populateContent


  // toggle sections open with +/- button
  function handleToggle() {
    if (sectionOpen === false) {
      <div className="accordion_section" id={sectionId}>
        <Button type={LinkTypes.BUTTON} href="" onClick={handleToggle(sectionId)}>
          <Image src="/assets/iconPlusSign.svg" alt="Open this accordion section" />
        </Button>
        <div className="accordion_section__content" hidden={true}>
          {children}
        </div>
      </div>;
    } else if (sectionOpen === true) {
      <div className="accordion_section" id={sectionId}>
        <Button type={LinkTypes.BUTTON} href="" onClick={handleToggle(sectionId)}>
          <Image src="/assets/iconMinusSign.svg" alt="Close this accordion section" />
        </Button>
        <div className="accordion_section__content" hidden={false}>
          {children}
        </div>
      </div>;
    } else {
      <div hidden={true}></div>;
    }
  }
  return <div className="accordion">{handleToggle()}</div>;
};
