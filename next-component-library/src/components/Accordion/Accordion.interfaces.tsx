import { HTMLAttributes } from 'react';

export type AccordionWrapperProps = HTMLAttributes<HTMLDivElement>;

export interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
  key?: string;
}
