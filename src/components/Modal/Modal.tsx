import { Button } from '../Button/Button';
import Image from 'next/image';
import { ModalProps } from './Modal.interfaces';
import ReactDOM from 'react-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import React from 'react';

export const Modal: React.FC<ModalProps> = ({ title, titleClass, buttonRef, rootDivRef, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // close the modal
  const closeModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  // open the modal
  const openModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal]);

  // close modal when overlay is clicked
  const backDropCloseHandler = useCallback(
    (e) => {
      if (modalRef && !modalRef?.current?.contains(e.target)) {
        closeModal();
      }
    },
    [closeModal]
  );

  // close modal when ESC key is pressed
  const escapeKeyCloseHandler = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  // open and close the modal
  useEffect(() => {
    setIsBrowser(true);

    // add event listeners for the button that opens the modal
    buttonRef.current?.addEventListener('click', openModal);
    buttonRef.current?.addEventListener('keydown', openModal);

    // TO-DO: FIX THESE SO CLICKING ON OVERLAY CLOSES MODAL
    if (showModal) {
      // attach event listeners to the whole window with our handler
      window.addEventListener('click', backDropCloseHandler);
      window.addEventListener('keydown', escapeKeyCloseHandler);
    }
    return () => {
      // removes event listeners from the window if anywhere outside the modal is clicked
      window.removeEventListener('keydown', escapeKeyCloseHandler);
      window.removeEventListener('click', backDropCloseHandler);
    };
  }, [escapeKeyCloseHandler, backDropCloseHandler, buttonRef, openModal]);

  // build modal content
  const ModalContent = showModal ? (
    <div
      className="modal_dialog flex flex-col bg-white border-solid border-2 border-black/50 rounded p-6 h-100 w-100"
      role="dialog"
      aria-label={title}
      aria-modal="true"
      ref={modalRef}
    >
      <header className="modal_header flex flex-row justify-between flex-nowrap justify-items-start">
        {title && <h2 className={titleClass && titleClass}>{title}</h2>}
        <Button
          className="py-4 px-4 -mt-4 -mr-4 flex justify-center items-center border-0"
          onClick={closeModal}
          onKeyDown={closeModal}
        >
          <Image src="/assets/iconCloseButton.svg" height={24} width={24} alt="close modal button" />
        </Button>
      </header>
      <div className="modal_body">{children}</div>
    </div>
  ) : null;

  // create DOM portal to display modal
  if (isBrowser) {
    return ReactDOM.createPortal(
      <div
        className={`modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex items-center justify-center bg-gray-600 bg-opacity-50 sm:p-10 md:p-20 lg:p-40 ${
          showModal ? '-open' : 'hidden'
        }`}
      >
        {ModalContent}
      </div>,
      rootDivRef.current
    );
  } else {
    return null;
  }
};
