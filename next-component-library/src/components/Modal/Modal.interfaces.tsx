import { HTMLAttributes } from 'react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  onClose: () => void;
  title?: string;
  titleClass?: string;
}
