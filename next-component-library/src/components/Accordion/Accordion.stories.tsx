import React from 'react';
import { ComponentStoryFn, Meta } from '@storybook/react';
import { AccordionItem } from './AccordionItem';
import { AccordionWrapper } from './AccordionWrapper';

export default {
  title: 'Components/Accordion',
  component: AccordionItem,
  argTypes: {},
} as Meta;

const contentP = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Duis convallis convallis tellus id interdum velit laoreet id. Condimentum mattis pellentesque id nibh tortor
    id aliquet lectus. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Tempus egestas sed sed risus
    pretium quam. Egestas quis ipsum suspendisse ultrices gravida dictum. Ac orci phasellus egestas tellus rutrum tellus
    pellentesque eu. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Tristique
    nulla aliquet enim tortor at auctor urna. Mauris pharetra et ultrices neque. Odio pellentesque diam volutpat commodo
    sed egestas. Dictum non consectetur a erat nam. Turpis egestas maecenas pharetra convallis posuere. Eu nisl nunc mi
    ipsum faucibus vitae aliquet nec ullamcorper. Vitae turpis massa sed elementum tempus egestas sed. Amet nulla
    facilisi morbi tempus iaculis. Molestie nunc non blandit massa enim nec dui nunc mattis. Cras sed felis eget velit.
    Ullamcorper sit amet risus nullam eget felis eget. Viverra orci sagittis eu volutpat odio facilisis mauris. Aliquet
    sagittis id consectetur purus. Urna nec tincidunt praesent semper feugiat nibh sed. Congue mauris rhoncus aenean vel
    elit scelerisque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Quam elementum pulvinar etiam non
    quam lacus suspendisse faucibus interdum.
  </p>
);

const accordionData = [
  {
    title: 'Section 1',
    content:
      'Duis convallis convallis tellus id interdum velit laoreet id. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Tempus egestas sed sed risus pretium quam. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Quam elementum pulvinar etiam non',
  },
  {
    title: 'Section 2',
    content: 'Yo fringilla est ullamcorper eget nulla facilisi etiam dignissim. Quam elementum pulvinar etiam non',
  },
];

const mapChildren = accordionData.map((item, index) => (
  <AccordionItem key={`${item.title}-${index}`} title={item.title} content={item.content} />
));

const SingleItemTemplate: ComponentStoryFn<typeof AccordionWrapper> = (args) => {
  return <AccordionWrapper>{args}</AccordionWrapper>;
};

const MultiItemTemplate: ComponentStoryFn<typeof AccordionWrapper> = () => {
  return <AccordionWrapper>{mapChildren}</AccordionWrapper>;
};

export const AccordionWithOneSection = SingleItemTemplate.bind({});
AccordionWithOneSection.args = {
  ...(<AccordionItem title="Accordion with 1 Section" content={contentP} />),
};

export const AccordionWithTwoSections = MultiItemTemplate.bind({});
AccordionWithTwoSections.args = {
  mapChildren,
};
