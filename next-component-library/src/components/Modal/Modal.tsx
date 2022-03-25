import { Button } from '../Button/Button';
import Image from 'next/image';
import { ModalProps } from './Modal.interfaces';
import ReactDOM from 'react-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import React from 'react';

export const Modal: React.FC<ModalProps> = ({ show, onClose, title, titleClass, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const backDropCloseHandler = useCallback(
    (e) => {
      if (modalRef && !modalRef?.current?.contains(e.target)) {
        onClose;
      }
    },
    [onClose]
  );

  const escapeKeyCloseHandler = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setIsBrowser(true);

    if (show) {
      // attach event listeners to the whole window with our handler
      window.addEventListener('click', backDropCloseHandler);
      window.addEventListener('keydown', escapeKeyCloseHandler);
    }
    return () => {
      // removes event listeners from the window
      window.removeEventListener('keydown', escapeKeyCloseHandler);
      window.removeEventListener('click', backDropCloseHandler);
    };
  }, [escapeKeyCloseHandler, backDropCloseHandler, show]);

  const ModalContent = show ? (
    <div
      className="modal_dialog flex flex-col bg-white border-solid border-2 border-black/50 rounded p-6 h-100 w-100"
      role="dialog"
      aria-modal="true"
      ref={modalRef}
    >
      <header className="modal_header flex flex-row justify-between flex-nowrap justify-items-start">
        {title && <h2 className={titleClass && titleClass}>{title}</h2>}
        <Button
          data-id="modalCloseButton"
          className="py-4 px-4 -mt-4 -mr-4 flex justify-center items-center border-0"
          onClick={onClose}
          onKeyDown={onClose}
        >
          <Image src="/assets/iconCloseButton.svg" height={24} width={24} alt="close modal button" />
        </Button>
      </header>
      <div className="modal_body">{children}</div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div
        className={`modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex items-center justify-center bg-gray-600 bg-opacity-50 sm:p-10 md:p-20 lg:p-40 ${
          show ? '-open' : 'hidden'
        }`}
      >
        {ModalContent}
      </div>,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};
