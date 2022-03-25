import React, { useRef, useState } from 'react';
import Image from 'next/image';

import { SlideContentProps } from './Carousel.interfaces';
import { Button } from '../Button/Button';

export const CarouselSlide: React.FC<SlideContentProps> = ({ title, subtitle, bgImg }) => {
  const [active, setActive] = useState(false);

  // the content of the current section when open
  const contentSpace = useRef<HTMLDivElement>(null);

  function goToSlide() {
    setActive(active === false ? true : false);
  }

  // swap solid and outlined circles based on whether the current section is active or not (solid = active)
  const changeIcon = active ? (
    <Image
      className="button-pip active"
      width="20"
      height="20"
      src="/assets/iconCircleFilled.svg"
      alt="Viewing current slide"
    />
  ) : (
    <Image className="button-pip" width="20" height="20" src="/assets/iconCircleUnfilled.svg" alt="View slide" />
  );

  return (
    <section className="flex flex-col">
      <Button data-id={`slide-${title}`} key={`slide-${title}`} onClick={goToSlide} onKeyDown={goToSlide}>
        {changeIcon}
      </Button>
      <div
        ref={contentSpace}
        className="carousel-slide--container overflow-auto transition-max-height duration-700 ease-in-out"
        id="accordion-content"
        hidden={!active}
      >
        <div className="carousel-slide--content pb-10 pr-6">
          <Image
            className="carousel-slide--image"
            width="500"
            height="200"
            src={bgImg}
            alt="Background image of current slide"
          />
          <h2 className="carousel-slide--title inline-block text-4xl font-bold">{title}</h2>
          <h3 className="carousel-slide--subtitle inline-block text-4xl font-bold">{subtitle}</h3>
        </div>
      </div>
    </section>
  );
};
