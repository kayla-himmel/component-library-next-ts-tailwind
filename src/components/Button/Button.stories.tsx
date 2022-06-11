import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { Button } from './Button';
import Image from 'next/image';

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
    onKeyDown: {
      table: {
        disable: true,
      },
    },
    iconType: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const iconJSX = (
  <Image
    className="button-next--icon rotate-180"
    width="16"
    height="16"
    src="/assets/iconChevronSign.svg"
    alt="Go to next page"
  />
);

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Text button example in Storybook
export const ButtonWithText = Template.bind({});
ButtonWithText.args = {
  children: 'Default button with text',
};

// Disabled state of text button example in Storybook
export const ButtonWithTextDisabledState = Template.bind({});
ButtonWithTextDisabledState.args = {
  children: 'Button in disabled state',
  disabled: true,
};

// Text & icon button example in Storybook
export const ButtonWithTextAndIcon = Template.bind({});
ButtonWithTextAndIcon.args = {
  children: (
    <>
      <span className="pr-2">Next</span>
      {iconJSX}
    </>
  ),
};

// Icon button example in Storybook
export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  children: iconJSX,
};
