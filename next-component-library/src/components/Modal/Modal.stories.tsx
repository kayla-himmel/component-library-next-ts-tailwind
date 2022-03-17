import React, { useState } from 'react';
import { ComponentStoryFn, Meta } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { LinkTypes } from '../Button/Button.interfaces';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: ComponentStoryFn<typeof Modal> = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button type={LinkTypes.BUTTON} onClick={() => setShowModal(true)}>
        Open Modal
      </Button>
      <Modal onClose={() => setShowModal(false)} show={showModal} title="Modal Header">
        <div>
          <h3>Modal Body</h3>
          <p>
            Modal Paragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
          <Button href="/test" type={LinkTypes.BUTTON} children="Test" />
        </div>
      </Modal>
      <div id="modal-root"></div>
    </>
  );
};

// Modal example in Storybook
export const ModalPrimary = Template.bind({});
