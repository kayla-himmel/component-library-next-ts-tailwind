import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { pageMockData } from '../../../utils/sample-data';
import { LinkTypes, PaginationTypes } from '../Button/Button.interfaces';
import PaginationProps from './Pagination.interfaces';

export const Pagination: React.FC<PaginationProps> = ({ onClick, itemsPerPage, dataArray, startingPage }) => {
  // current page is active
  const [active, setActive] = useState(false);

  // set current page to the starting page
  const [currentPage, setCurrentPage] = useState<number>(startingPage);

  // create a new data array that contains chunks of array, pushing them into the resultArray
  const createArrayOfArrays = dataArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / itemsPerPage);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk of items
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
    // eslint-disable-next-line no-console
    console.log(resultArray);
  }, []);

  // map through createArrayOfArrays and build the individual items, displaying an image and caption for each item in the array
  const mapChildren = createArrayOfArrays.map((arrayItem, index) => {
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

    // chunks of items div
    if (isCurrentPage) {
      return (
        <div className="pageContent" key={`id-${pageNumber}`} id={`page-${pageNumber}`}>
          {createIndItems}
        </div>
      );
    }

    return (
      <div className="pageContent" key={`id-${pageNumber}`} id={`page-${pageNumber}`}>
        {createIndItems}
      </div>
    );
  });

  // click event logic for Previous button
  function goToPrevious() {
    if (!active) {
      // onClick(setCurrentPage);
      // return user to previous page of results
      // disableNavButtons();
    }
  }

  // click event logic for Next button
  function goToNext() {
    if (!active) {
      // onClick(setCurrentPage);
      // return user to next page of results
      // disableNavButtons();
    }
  }

  return (
    <div className="pagination">
      <nav>
        <Button type={LinkTypes.BUTTON} href="/" id={PaginationTypes.PREVIOUS} onClick={goToPrevious} disabled={active}>
          Previous
        </Button>
        <div className="content_wrapper grid grid-cols-3 justify-items-center">
          <div className="pageWrapper">{mapChildren}</div>
        </div>
        <Button type={LinkTypes.BUTTON} href="/" id={PaginationTypes.NEXT} onClick={goToNext} disabled={active}>
          Next
        </Button>
      </nav>
    </div>
  );
};
