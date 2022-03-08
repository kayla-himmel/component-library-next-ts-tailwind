import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { LinkTypes } from '../Button/Button.interfaces';
import PaginationProps from './Pagination.interfaces';

export const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, dataArray, startingPage }) => {
  // set current page to the starting page
  const [currentPage, setCurrentPage] = useState<number>(startingPage);
  const pageNumberLimit = 3;

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
          {item}
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

  // build pagination with hover and active styles
  const showPageNumbers = createArrayOfArrays.map((item, index) => {
    const pageNumber = index + 1;
    const firstPage = 1;
    const rangeSides = Math.floor(pageNumberLimit / 2);
    const minPage =
      currentPage === createArrayOfArrays.length ? currentPage - (pageNumberLimit - 1) : currentPage - rangeSides;
    const maxPage = currentPage === firstPage ? currentPage + pageNumberLimit - 1 : currentPage + rangeSides;

    function createRange(min, max) {
      const range = [];
      for (let i = min; i <= max; i++) {
        range.push(i);
      }
      return range;
    }

    if (createRange(minPage, maxPage).includes(pageNumber)) {
      return (
        <Button
          type={LinkTypes.BUTTON}
          href="/"
          id={`${pageNumber}`}
          key={`page-${pageNumber}`}
          className={`${
            pageNumber === currentPage && 'active font-bold bg-black text-gray-100'
          } px-3 border-0 text-xl hover:text-2xl hover:font-bold hover:py-1 hover:px-2 hover:text-black`}
          onClick={goToPage}
        >
          {pageNumber}
        </Button>
      );
    }
  });

  // ellipsis button next to previous button to skip back 2 pages
  function showPastPageIncrement() {
    setCurrentPage(currentPage - 2);
  }

  // ellipsis button next to next button to skip ahead 2 pages
  function showNextPageIncrement() {
    setCurrentPage(currentPage + 2);
  }

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
        <div className="pagination-wrapper flex justify-center mt-8">
          <nav className="pagination-nav flex justify-between items-center space-x-1 w-80">
            {/* Previous button */}
            <Button
              type={LinkTypes.BUTTON}
              href="/"
              id="previous"
              className="border-0 flex px-3"
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
            <div className="pagination-numbers flex space-x-1">
              {/* Left Ellipsis button */}
              {currentPage >= pageNumberLimit && (
                <Button
                  type={LinkTypes.BUTTON}
                  href="/"
                  id="next"
                  className="border-0 flex px-3"
                  onClick={showPastPageIncrement}
                >
                  &hellip;
                </Button>
              )}
              {/* Page numbers */}
              {showPageNumbers}
              {/* Right Ellipsis button */}
              {createArrayOfArrays.length >= pageNumberLimit && (
                <Button
                  type={LinkTypes.BUTTON}
                  href="/"
                  id="previous"
                  className="border-0 flex px-3"
                  onClick={showNextPageIncrement}
                >
                  &hellip;
                </Button>
              )}
            </div>
            {/* Next button */}
            <Button
              type={LinkTypes.BUTTON}
              href="/"
              id="next"
              className="border-0 flex px-3"
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
