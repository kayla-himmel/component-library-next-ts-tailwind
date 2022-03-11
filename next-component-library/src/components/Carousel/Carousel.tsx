import React from 'react';
// import { Button } from '../Button/Button';
import { CarouselProps } from './Carousel.interfaces';

export const Carousel: React.FC<CarouselProps> = ({ slide }) => {
  const mapSlides = slide.map((item) => {
    <div className="carousel-slide" id={item.id} key={`slide-{item.key}`}>
      <div>{item.content}</div>
      {item.content.title ? <h2>{item.content.title}</h2> : null}
      {item.content.title ? <h2>{item.content.title}</h2> : null}
      {item.content.title ? <h2>{item.content.title}</h2> : null}
    </div>;
  });

  return <div className="carousel-wrapper">{mapSlides}</div>;
};
