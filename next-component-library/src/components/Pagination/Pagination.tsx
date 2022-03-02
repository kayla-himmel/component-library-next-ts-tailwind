import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { LinkTypes, PaginationTypes } from '../Button/Button.interfaces';
import PaginationProps from './Pagination.interfaces';

export const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, dataArray, startingPage }) => {
  // set current page to the starting page
  const [currentPage, setCurrentPage] = useState<number>(startingPage);

  useEffect(() => {
    // Update the currentPage when page number is clicked
    // Redraw the chunk of items from the array of arrays that matches the currentPage
  });

  // create a new data array that contains chunks of array, pushing them into the resultArray
  const createArrayOfArrays = dataArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / itemsPerPage);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk of items
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  // map through createArrayOfArrays and build the individual items, displaying an image and caption for each item in the array
  const createContentWrappers = createArrayOfArrays.map((arrayItem, index) => {
    const pageNumber = index + 1;

    const isCurrentPage = pageNumber === currentPage;

    const createIndItems = arrayItem.map((item, index) => {
      return (
        <div className="content_card" key={`${item}-${index}`}>
          <Image src={item.image} height={150} width={150} alt={item.caption} />
          <p>Caption: {item.caption}</p>
        </div>
      );
    });

    // chunks of items div that displays the items in the array of the array whose index matches the page number
    if (isCurrentPage) {
      return (
        <div
          className="content_wrapper grid grid-cols-3 justify-items-center"
          key={`id-${pageNumber}`}
          id={`page-${pageNumber}`}
        >
          {createIndItems}
        </div>
      );
    }
  });

  // build pagination and show current page in bold
  const showPageNumbers = createArrayOfArrays.map((item, index) => {
    const pageNumber = index + 1;

    return (
      <Button
        type={LinkTypes.BUTTON}
        href="/"
        id={`${index + 1}`}
        key={`page-${index + 1}`}
        className={`${
          pageNumber === currentPage && 'active font-bold'
        } border-0 text-xl hover:text-2xl hover:font-bold hover:py-1 hover:px-5`}
        onClick={goToPage}
      >
        {pageNumber}
      </Button>
    );
  });

  // click event logic for actual page number buttons
  function goToPage(event) {
    const newPage = parseInt(event.target.id);
    setCurrentPage(newPage);
  }

  // click event logic for Previous button
  function goToPrevious() {
    setCurrentPage(currentPage - 1);
  }

  // click event logic for Next button
  function goToNext() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      {createContentWrappers}
      {createArrayOfArrays.length > 0 && (
        <div className="pagination mt-8">
          <nav className="flex justify-center items-center space-x-1">
            <Button
              type={LinkTypes.BUTTON}
              href="/"
              id={PaginationTypes.PREVIOUS}
              className="border-0 flex"
              onClick={goToPrevious}
              disabled={currentPage === 1}
            >
              <Image
                width="24"
                height="24"
                src="/assets/iconChevronSign.svg"
                alt="Go back to previous page of results"
              />
            </Button>
            <div className="flex space-x-1">{showPageNumbers}</div>
            <Button
              type={LinkTypes.BUTTON}
              href="/"
              id={PaginationTypes.NEXT}
              className="border-0 flex"
              onClick={goToNext}
              disabled={currentPage === createArrayOfArrays.length}
            >
              <Image
                className="rotate-180"
                width="24"
                height="24"
                src="/assets/iconChevronSign.svg"
                alt="Go to next page of results"
              />
            </Button>
          </nav>
        </div>
      )}
    </>
  );
};

/*
  TO-DO:
  - style active buttons
  - add ellipses for more than 3 pages (or whatever)
  - style component cards like the layout cards
  - make component more generic/reusable (grab item instead of item.image and item.caption)
  - check for keyboard/screen reader accessibility with our pagination nav
*/
