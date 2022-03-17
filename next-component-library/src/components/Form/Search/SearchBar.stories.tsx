import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import SearchBar from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
} as Meta;

const posts = [
  { id: '1', name: 'What is happening in Cbus' },
  { id: '2', name: "Let's learn NextJS" },
  { id: '3', name: 'React Hooks' },
  { id: '4', name: 'This is the fourth and final post' },
];

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

// SearchBar example in Storybook
export const SearchBarPrimary = Template.bind({});
SearchBarPrimary.args = {
  label: 'Select an Option',
  addLabelAbove: true,
};
