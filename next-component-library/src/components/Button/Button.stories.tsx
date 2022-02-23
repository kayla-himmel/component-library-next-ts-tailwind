import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { Button } from './Button';
import { LinkTypes } from './Button.interfaces';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Buttons & Links',
  component: Button,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Button example in Storybook
export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  children: 'Click Me',
  href: '/',
  type: LinkTypes.BUTTON,
};

// Link example in Storybook
export const LinkPrimary = Template.bind({});
LinkPrimary.args = {
  children: 'Click to learn more',
  type: LinkTypes.LINK,
  href: '/about',
};
