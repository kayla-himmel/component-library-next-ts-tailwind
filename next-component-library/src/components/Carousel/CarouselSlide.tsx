import React, { useRef } from 'react';
import Image from 'next/image';
import { SlideContentProps } from './Carousel.interfaces';

export const CarouselSlide: React.FC<SlideContentProps> = ({ title, subtitle, image }) => {
  // the content of the current section when open
  const slideRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={slideRef} className="carousel-slide--content pb-10 pr-6">
      {image ? (
        <Image
          className="carousel-slide--image"
          width="500"
          height="200"
          src={image}
          alt="Background image of current slide"
        />
      ) : (
        <div className="bg-gray-300" />
      )}
      {title ? <h2 className="carousel-slide--title inline-block text-4xl font-bold">{title}</h2> : null}
      {subtitle ? <h3 className="carousel-slide--subtitle inline-block text-4xl font-bold">{subtitle}</h3> : null}
    </div>
  );
};
