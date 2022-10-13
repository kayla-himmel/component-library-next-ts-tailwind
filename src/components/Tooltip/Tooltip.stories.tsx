import React from 'react';
import { ComponentStoryFn, Meta } from '@storybook/react';
import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
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

const Template: ComponentStoryFn<typeof Tooltip> = () => {
  return (
    <>
      <Tooltip id="tooltip">
        <p>Tooltip text here...click anywhere outside the tooltip or hit escape to hide the tooltip</p>
      </Tooltip>
    </>
  );
};

// Tooltip example in Storybook
export const TooltipPrimary = Template.bind({});
