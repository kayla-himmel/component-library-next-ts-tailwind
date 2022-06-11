import { HTMLAttributes } from 'react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  buttonRef: React.RefObject<HTMLButtonElement>;
  rootDivRef: React.RefObject<HTMLDivElement>;
  title?: string;
  titleClass?: string;
}
