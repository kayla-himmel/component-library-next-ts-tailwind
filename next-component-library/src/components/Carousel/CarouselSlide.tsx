import React, { useRef } from 'react';
import Image from 'next/image';
import { SlideProps } from './Carousel.interfaces';

export const CarouselSlide: React.FC<SlideProps> = ({ content }) => {
  // the content of the current section when open
  const slideRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={slideRef} className="carousel-slide--content pb-10 pr-6">
      {content.bgImg ? (
        <Image
          className="carousel-slide--image"
          width="500"
          height="200"
          src={content.bgImg}
          alt="Background image of current slide"
        />
      ) : (
        <div className="bg-gray-300" />
      )}
      {content.title ? (
        <h2 className="carousel-slide--title inline-block text-4xl font-bold">{content.title}</h2>
      ) : null}
      {content.subtitle ? (
        <h3 className="carousel-slide--subtitle inline-block text-4xl font-bold">{content.subtitle}</h3>
      ) : null}
    </div>
  );
};
