import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import SearchBar from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
} as Meta;

//TOD0: Add search bar functionality

const data = [
  { id: '1', name: 'What is happening in Cbus' },
  { id: '2', name: "Let's learn NextJS" },
  { id: '3', name: 'React Hooks' },
  { id: '4', name: 'This is the fourth and final post' },
];

const Template: ComponentStory<typeof SearchBar> = (args) => {
  //could use a filter library
  const filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }

    return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const filteredPosts = filterPosts(data, query);

  return (
    <div>
      <SearchBar {...args} />
      );
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

// SearchBar example in Storybook
export const SearchBarPrimary = Template.bind({});
SearchBarPrimary.args = {
  label: 'Select an Option',
  addLabelAbove: true,
};
