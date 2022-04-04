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
    as: {
      table: {
        disable: true,
      },
    },
    replace: {
      table: {
        disable: true,
      },
    },
    scroll: {
      table: {
        disable: true,
      },
    },
    shallow: {
      table: {
        disable: true,
      },
    },
    passHref: {
      table: {
        disable: true,
      },
    },
    prefetch: {
      table: {
        disable: true,
      },
    },
    locale: {
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

// Link example in Storybook
export const LinkStyledAsButton = Template.bind({});
LinkStyledAsButton.args = {
  children: 'Click to learn moreaaaaaa',
  styleAs: 'button',
  href: '/about',
};
