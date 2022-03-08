import React from 'react';
// import { Button } from '../Button/Button';
import { CarouselProps } from './Carousel.interfaces';

export const Carousel: React.FC<CarouselProps> = ({ content }) => {
  const mapSlides = content.map((item) => {
    <div className="carousel-slide" id={item.id} key={`slide-{item.key}`}>
      <div>{item.content}</div>
      <h3>{item.caption}</h3>
    </div>;
  });

  return <div className="carousel-wrapper">{mapSlides}</div>;
};
