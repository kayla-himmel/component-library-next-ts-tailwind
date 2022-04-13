import React, { useRef } from 'react';
import { ComponentStoryFn, Meta } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
    buttonRef: {
      table: {
        disable: true,
      },
    },
    rootDivRef: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
    titleClass: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: ComponentStoryFn<typeof Modal> = () => {
  const modalButtonRef = useRef<HTMLButtonElement>(null);
  const rootElementRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Button data-id="openModal" ref={modalButtonRef}>
        Open Modal
      </Button>
      <Modal buttonRef={modalButtonRef} rootDivRef={rootElementRef} title="Modal Header">
        <div>
          <h3>Modal Body</h3>
          <p>
            Modal Paragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </div>
      </Modal>
      <div ref={rootElementRef}></div>
    </>
  );
};

// Modal example in Storybook
export const ModalPrimary = Template.bind({});
