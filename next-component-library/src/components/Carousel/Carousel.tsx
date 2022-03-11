import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { CarouselProps } from './Carousel.interfaces';
import { ButtonIcon } from '../Button/ButtonIcon';
import { LinkTypes } from '../Button/Button.interfaces';

export const Carousel: React.FC<CarouselProps> = ({ slideArray }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  // map through each slide and display in carousel-wrapper div
  const mapSlides = slideArray.map((arrayItem, index) => {
    const slideNumber = index + 1;
    const isCurrentSlide = slideNumber === currentSlide;

    const createSlides = arrayItem.map((item, index) => {
      return (
        <div className="carousel-slide" id={item.id} key={`slide-{item.key}`}>
          {item.content.title ? <h2>{item.content.title}</h2> : null}
          {item.content.title ? <Image width="24" height="24" alt={item.a11yText} src={item.content.image} /> : null}
          {item.content.title ? <h2>{item.content.title}</h2> : null}
        </div>
      );
    });
  });

  // click event logic for actual Slide pip buttons
  function goToSlide(event) {
    const newSlide = parseInt(event.target.id);
    setCurrentSlide(newSlide);
  }

  // click event logic for Previous button
  function goToPrevious() {
    setCurrentSlide(currentSlide - 1);
  }

  // click event logic for Next button
  function goToNext() {
    setCurrentSlide(currentSlide + 1);
  }

  // carousel navigation (previous/next buttons and pips)
  const carouselNav = () => {
    <div className="carousel-nav">
      <ButtonIcon
        type={LinkTypes.BUTTON}
        href="/"
        id="previousSlide"
        onClick={goToPrevious}
        disabled={currentSlide === 1}
      >
        <Image
          className="button-previous"
          width="20"
          height="20"
          src="/assets/iconChevronSign.svg"
          alt="Go to previous slide"
        />
      </ButtonIcon>

      {}

      <ButtonIcon
        type={LinkTypes.BUTTON}
        href="/"
        id="nextSlide"
        onClick={goToNext}
        disabled={currentSlide === slideArray.length}
      >
        <Image
          className="button-next rotate-180"
          width="20"
          height="20"
          src="/assets/iconChevronSign.svg"
          alt="Go to next slide"
        />
      </ButtonIcon>
    </div>;
  };

  return <div className="carousel-wrapper">{mapSlides}</div>;
};
