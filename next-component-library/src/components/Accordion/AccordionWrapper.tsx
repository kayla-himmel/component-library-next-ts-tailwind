import { AccordionWrapperProps } from './Accordion.interfaces';

export const AccordionWrapper = ({ children }: AccordionWrapperProps) => {
  return <div className="accordion_wrapper">{children}</div>;
};
