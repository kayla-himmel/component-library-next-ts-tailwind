import React, { useRef } from 'react';
import Image from 'next/image';
import { SlideContentProps } from './Carousel.interfaces';

export const CarouselSlide: React.FC<SlideContentProps> = ({ title, subtitle, image, className }) => {
  // the content of the current section when open
  const slideRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={slideRef} className={`${className} carousel-slide--content`} role="group">
      {image ? (
        <Image
          className="carousel-slide--image sm:w-screen sm:z-0"
          width="1200"
          height="1200"
          layout="intrinsic"
          src={image}
          alt="Background image of current slide"
        />
      ) : (
        <div className="carousel-slide--bg bg-gray-300 z-0" />
      )}
      <div className="carousel-slide--text sm:z-10">
        {title ? <h2 className="carousel-slide--title inline-block text-4xl font-bold mt-2 mb-3">{title}</h2> : null}
        {subtitle ? <h3 className="carousel-slide--subtitle inline-block text-xl">{subtitle}</h3> : null}
      </div>
    </div>
  );
};
