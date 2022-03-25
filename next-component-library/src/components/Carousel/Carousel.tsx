import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { CarouselProps } from './Carousel.interfaces';

export const Carousel: React.FC<CarouselProps> = ({ slideArray }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  // create a new data array that contains chunks of array, pushing them into the resultArray
  const createArrayOfSlides = slideArray.reduce((resultArray, item, index) => {
    if (!resultArray[index]) {
      resultArray[index] = []; // start a new chunk of items
    }

    resultArray[index].push(item);

    return resultArray;
  }, []);

  // map through each slide and display in carousel-wrapper div
  const mapSlides = createArrayOfSlides.map((arrayItem, index) => {
    const slideNumber = index + 1;

    const isCurrentSlide = slideNumber === currentSlide;

    const createSlide = arrayItem.map((item, index) => {
      return (
        <div className="carousel-slide" id={item.id} key={`slide-${item.key}-${index}`}>
          {item.content.title ? <h2>{item.content.title}</h2> : null}
          {item.content.title ? <Image width="24" height="24" alt={item.a11yText} src={item.content.image} /> : null}
          {item.content.title ? <h2>{item.content.title}</h2> : null}
        </div>
      );
    });

    // chunks of items div that displays the items in the array of the array whose index matches the page number
    if (isCurrentSlide) {
      return (
        <div
          className="content_wrapper grid grid-cols-3 grid-rows-2 justify-items-center"
          key={`id-${slideNumber}`}
          id={`page-${slideNumber}`}
        >
          {createSlide}
        </div>
      );
    }
  });

  // carousel navigation (previous/next buttons and pips (dots) to navigate to specific slides)
  const showCarouselNav = createArrayOfSlides.map((arrayItem, index) => {
    const slideNumber = index + 1;

    return (
      <Button data-id={`slide-${slideNumber}`} key={`slide-${slideNumber}`} onClick={goToSlide} onKeyDown={goToSlide}>
        {currentSlide ? (
          <Image
            className="button-pip active"
            width="20"
            height="20"
            src="/assets/iconCircleFilled.svg"
            alt="Viewing current slide"
          />
        ) : (
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

  // click event logic for Previous button
  function goToPrevious() {
    setCurrentSlide(currentSlide - 1);
  }

  // click event logic for Next button
  function goToNext() {
    setCurrentSlide(currentSlide + 1);
  }

  return (
    <div className="carousel-wrapper">
      {mapSlides}
      <div className="carousel-nav">
        <Button data-id="previousSlide" onClick={goToPrevious} onKeyDown={goToPrevious}>
          <Image
            className="button-previous"
            width="20"
            height="20"
            src="/assets/iconChevronSign.svg"
            alt="Go to previous slide"
          />
        </Button>
        <div className="carousel-pips">{showCarouselNav}</div>
        <Button data-id="nextSlide" onClick={goToNext} onKeyDown={goToNext}>
          <Image
            className="button-next rotate-180"
            width="20"
            height="20"
            src="/assets/iconChevronSign.svg"
            alt="Go to next slide"
          />
        </Button>
      </div>
    </div>
  );
};
