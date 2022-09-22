import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { CarouselProps } from './Carousel.interfaces';
import { CarouselSlide } from './CarouselSlide';

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
    const pipIconToggle =
      currentSlide === index
        ? "bg-[url('../../public/assets/iconCircleFilled.svg')] px-5 py-5"
        : "bg-[url('../../public/assets/iconCircleUnfilled.svg')]";

    return (
      <Button
        type="button"
        typeof="icon"
        data-id={`slide-${index}`}
        key={`nav-${index}`}
        onClick={goToSlide}
        onKeyDown={goToSlide}
        className={`${pipIconToggle} bg-no-repeat pr-0 pb-0 w-6 h-6 border-none hover:rounded-xl hover:bg-gray-300`}
      />
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
    <div className="carousel-wrapper max-w-3xl" aria-label="carousel">
      {/* Actual slides */}
      <div className="carousel-slide__container">{buildSlides}</div>
      {/* Carousel Navigation */}
      <nav className="carousel-nav flex justify-center mt-6 md:mt-10 space-x-5">{carouselNav}</nav>
    </div>
  );
};
