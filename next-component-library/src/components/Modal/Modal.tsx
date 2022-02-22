import { Button } from '../Button/Button';
import Image from 'next/image';
import { LinkTypes } from '../Button/Button.interfaces';
import { ModalProps } from './Modal.interfaces';

export const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <header className="modal_header">
        <Button type={LinkTypes.BUTTON} href="/">
          <Image src="/assets/iconCloseButton.svg" height={44} width={44} alt="close modal button" />
        </Button>
      </header>
      <body className="modal_body">{children}</body>
    </div>
  );
};
