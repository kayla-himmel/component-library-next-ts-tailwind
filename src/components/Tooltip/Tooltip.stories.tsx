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

const Template: ComponentStoryFn<typeof Tooltip> = (args) => <Tooltip {...args} />;

// Tooltip embeded in text
export const TooltipInText = Template.bind({});
TooltipInText.args = {
  children: 'Tooltip text here...click anywhere outside the tooltip or hit escape to hide the tooltip',
  styleAs: 'text',
  id: 'tooltipText',
};
