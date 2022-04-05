import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { CarouselProps } from './Carousel.interfaces';
import { CarouselSlide } from './CarouselSlide';
import { LinkTypes } from '../Button/Button.interfaces';

export const Carousel: React.FC<CarouselProps> = ({ slideArray }) => {
  // set first index of the slideArray as the currentSlide
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // build each slide and display in .carousel-wrapper div
  const buildSlides = slideArray.map((item, index) => {
    // add class to active slide
    const activeClass = currentSlide === index ? 'active grid' : 'hidden';

    return (
      <CarouselSlide
        className={activeClass}
        id={`slide-${index}`}
        key={`slide-${index}`}
        {...item}
        aria-hidden={!currentSlide}
        aria-label={`slide ${index + 1} of ${slideArray.length + 1}`}
      />
    );
  });

  // build carousel navigation by creating a pip button for each index in the buildSlides array
  const carouselNav = buildSlides.map((arrayItem, index) => {
    return (
      <Button
        role={LinkTypes.BUTTONPIP}
        data-id={`slide-${index}`}
        key={`nav-${index}`}
        onClick={goToSlide}
        onKeyDown={goToSlide}
      >
        {currentSlide === index ? (
          // Display filled-in circle pip if slide is active
          <Image
            className="button-pip active"
            width="24"
            height="24"
            src="/assets/iconCircleFilled.svg"
            alt="Viewing current slide"
            aria-current="true"
          />
        ) : (
          // Display empty outlined circle pip is slide is not active
          <Image
            className="button-pip hover:rounded-3xl hover:bg-gray-400"
            width="24"
            height="24"
            src="/assets/iconCircleUnfilled.svg"
            alt={`View slide ${index + 1}`}
            aria-current="false"
          />
        )}
      </Button>
    );
  });

  // click event logic for nav to specific slides using the pip (dots) buttons
  function goToSlide(event) {
    const newSlide = parseInt(event.target.getAttribute('data-id')?.split('-')[1]);
    setCurrentSlide(newSlide);
  }

  // determine which slide is active
  // add slide animation in/out (add red outline)

  return (
    <div className="carousel-wrapper" aria-label="carousel">
      {/* Actual slides */}
      <div className="carousel-slide__container">{buildSlides}</div>
      {/* Carousel Navigation */}
      <nav className="carousel-nav flex justify-center mt-6">{carouselNav}</nav>
    </div>
  );
};
