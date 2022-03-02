import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const sampleDropdownData = [
  { id: '0', label: 'Istanbul, TR (AHL)' },
  { id: '1', label: 'Paris, FR (CDG)' },
  { id: '2', label: 'Columbus, OH (CMH)' },
];

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

// Dropdown example in Storybook
export const DropdownPrimary = Template.bind({});
DropdownPrimary.args = {
  title: 'Select an Option',
  data: sampleDropdownData,
};
