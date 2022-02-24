import { HTMLAttributes } from 'react';

export type AccordionWrapperProps = HTMLAttributes<HTMLDivElement>;

export interface AccordionProps {
  title: string;
  content: React.ReactNode;
  key?: string;
}
