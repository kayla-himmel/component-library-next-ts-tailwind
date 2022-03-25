import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { LinkComponent } from './Link';

export default {
  title: 'Components/Buttons & Links',
  component: LinkComponent,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: ComponentStory<typeof LinkComponent> = (args) => <LinkComponent {...args} />;

// Link example in Storybook
export const Link = Template.bind({});
Link.args = {
  children: 'Click to learn more',
  href: '/about',
};
