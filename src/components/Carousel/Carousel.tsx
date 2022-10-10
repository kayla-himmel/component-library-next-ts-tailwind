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
      <li key={`slide-${index}`} id={`slide-${index}`}>
        <CarouselSlide
          className={`${activeClass}`}
          id={`slide-${index}`}
          {...item}
          aria-hidden={!currentSlide}
          aria-label={`slide ${index + 1} of ${slideArray.length + 1}`}
        />
      </li>
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

  // Pip (dots) navigation click event logic for nav to specific slides
  function goToSlide(event) {
    const newSlide = parseInt(event.target.getAttribute('data-id')?.split('-')[1]);
    setCurrentSlide(newSlide);
  }

  // Next button click event logic
  function goToNextSlide() {
    // loop the carousel around if the last slide is the currentSlide
    if (currentSlide === 4) {
      return setCurrentSlide((currentSlide as number) - 4);
    }
    // show the next slide on click
    return setCurrentSlide((currentSlide as number) + 1);
  }
  // Previous button click event logic
  function goToPrevSlide() {
    // loop the carousel around if the first slide is the currentSlide
    if (currentSlide === 0) {
      return setCurrentSlide((currentSlide as number) + 4);
    }
    // show the previous slide on click
    return setCurrentSlide((currentSlide as number) - 1);
  }

  // Previous/Next button styling
  const slideButtonStyle = 'pt-1 pb-5 border-none bg-no-repeat';

  return (
    <div className="carousel-wrapper flex flex-col max-w-3xl relative" aria-label="carousel">
      {/* Prev/Next buttons */}
      <div className="carousel-slide__buttons flex justify-between w-full z-10 absolute top-80">
        {/* Previous slide button */}
        <Button
          className={`${slideButtonStyle} bg-[url('../../public/assets/iconChevronSign.svg')] pr-5 pl-0 inset-x-5 rotate-180`}
          onClick={goToPrevSlide}
          onKeyDown={goToPrevSlide}
        />
        {/* Next slide button */}
        <Button
          className={`${slideButtonStyle} bg-[url('../../public/assets/iconChevronSign.svg')] pl-5 pr-0 inset-x-5`}
          onClick={goToNextSlide}
          onKeyDown={goToNextSlide}
        />
      </div>
      {/* Actual slides */}
      <ul className="carousel-slide__container px-8">{buildSlides}</ul>
      {/* Carousel Pip Navigation */}
      <nav className="carousel-nav flex justify-center mt-6 md:mt-10 space-x-5">{carouselNav}</nav>
    </div>
  );
};
