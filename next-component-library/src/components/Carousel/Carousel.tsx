import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { CarouselProps } from './Carousel.interfaces';
import { CarouselSlide } from './CarouselSlide';

export const Carousel: React.FC<CarouselProps> = ({ slideArray }) => {
  // set first index of the slideArray as the currentSlide
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // map through each slide and display in .carousel-wrapper div
  const buildSlides = slideArray.map((item, index) => {
    // build each slide
    return <CarouselSlide id={`slide-${index}`} key={`slide-${index}`} {...item} />;
  });

  // build carousel navigation by creating a pip button for each index in the buildSlides array
  const carouselNav = buildSlides.map((arrayItem, index) => {
    return (
      <Button data-id={`slide-${index}`} key={`slide-${index}`} onClick={goToSlide} onKeyDown={goToSlide}>
        {currentSlide ? (
          // Display filled-in circle pip if slide is active
          <Image
            className="button-pip active"
            width="20"
            height="20"
            src="/assets/iconCircleFilled.svg"
            alt="Viewing current slide"
          />
        ) : (
          // Display empty outlined circle pip is slide is not active
          <Image
            className="button-pip"
            width="20"
            height="20"
            src="/assets/iconCircleUnfilled.svg"
            alt={`View slide ${index + 1}`}
          />
        )}
      </Button>
    );
  });

  // click event logic for nav to specific slides using the pip (dots) buttons
  function goToSlide(event) {
    const newSlide = parseInt(event.target.id);
    setCurrentSlide(newSlide);
  }

  return (
    <div className="carousel-wrapper">
      {/* Actual slides */}
      <div className="carousel-slide__container">{buildSlides}</div>
      {/* Carousel Navigation */}
      <div className="carousel-nav">{carouselNav}</div>
    </div>
  );
};
