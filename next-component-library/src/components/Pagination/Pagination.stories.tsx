import { ComponentStory, Meta } from '@storybook/react';
import { transformDataToHtml } from '../../../utils/sample-data';
import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

// Pagination example in Storybook
export const PaginationPrimary = Template.bind({});
PaginationPrimary.args = {
  itemsPerPage: 6,
  dataArray: transformDataToHtml(),
  startingPage: 1,
};
