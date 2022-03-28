import { ComponentStory, Meta } from '@storybook/react';
import { Carousel } from './Carousel';
import { CarouselSlide } from './CarouselSlide';

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
    title: 'Short heading',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 2',
    title: 'A bit longer heading',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://via.placeholder.com/150x150',
    caption: 'placeholder 3',
    title: 'An really, really long heading to check for word wrapping and stuff',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

// create slides for carousel
const createSlides = carouselData.map((item, index) => <CarouselSlide key={`${item.title}-${index}`} content={item} />);

// eslint-disable-next-line no-console
console.log(createSlides[0], 'createSlides[0]');

// story template to display a single slide
const slideTemplate: ComponentStory<typeof CarouselSlide> = (args) => (
  <CarouselSlide {...args}>{createSlides[0]}</CarouselSlide>
);

// add slides to carousel story template
const carouselTemplate: ComponentStory<typeof Carousel> = (args) => <Carousel {...args}>{createSlides}</Carousel>;

// Default Carousel story
export const CarouselSlidePrimary = slideTemplate.bind({});
CarouselSlidePrimary.args = {
  createSlides,
};

// Default Carousel story
export const CarouselPrimary = carouselTemplate.bind({});
CarouselPrimary.args = {
  createSlides,
};
