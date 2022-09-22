import { ComponentStory, Meta } from '@storybook/react';
import { Carousel } from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    slideArray: {
      table: {
        disable: true,
      },
    },
    mapChildren: {
      table: {
        disable: true,
      },
    },
    createSlides: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const carouselData = [
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 1',
    title: '1 Short heading',

    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 2',
    title: '2 A bit longer heading',
    subtitle: 'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 3',
    title: '3 An really, really long heading to check for word wrapping, stuff, and things',
    subtitle: 'Sit amet, consectetur adipiscing elit',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 4',
    title: '4 Short heading again',
    subtitle: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 5',
    title: '5 Medium length heading so we can see the word wrapping',
    subtitle: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

// add slides to carousel story template
const carouselTemplate: ComponentStory<typeof Carousel> = (args) => (
  <div className="mx-auto">
    <Carousel {...args} />
  </div>
);

// Default Carousel story
export const CarouselPrimary = carouselTemplate.bind({});
CarouselPrimary.args = {
  slideArray: carouselData,
};
