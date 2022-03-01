import Image from 'next/image';
import { DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from 'react';
import { Button } from '../Button/Button';
import { LinkTypes, PaginationTypes } from '../Button/Button.interfaces';
import PaginationProps from './Pagination.interfaces';

export const Pagination: React.FC<PaginationProps> = ({ onClick }) => {
  // current page is active
  const [active, setActive] = useState(false);

  const displayPageContent = (itemsPerPage, dataArray) => {
    const pageDataLength = dataArray.length;

    //total number of pages (rounded up to nearest interger)
    const totalPages = Math.ceil(pageDataLength / itemsPerPage);

    // empty array to hold generated page content
    const contentArray: ReactNode[] = [];

    // init div that is pushed to array
    let contentDiv: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

    // create a new data array that contains chunks of array, pushing them into the resultArray
    const newDataArray = dataArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / itemsPerPage);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk of items
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

    // map through newDataArray and build the individual items, displaying an image and caption for each item in the array
    const mapChildren = newDataArray.map((arrayItem, index) => {
      // eslint-disable-next-line no-console
      console.log(arrayItem, 'arrayItem');
      return (
        <div key={`id-${index + 1}`} id={`id-${index + 1}`}>
          {arrayItem.map((item, index) => {
            const imageSrc = item[arrayItem].image;
            const imageAlt = item.caption;
            return (
              <div className="content_card" key={`${item}-${index}`}>
                <Image src={imageSrc} height={150} width={150} alt={imageAlt} />
                <caption>Caption: {imageAlt}</caption>
              </div>
            );
          })}
        </div>
      );
    });

    // return list of individual divs inside the .pageContent div
    return (
      <div className="pageContent" id={`page-`}>
        {mapChildren}
      </div>
    );
  };

  // click event logic for Previous button
  function goToPrevious() {
    if (!active) {
      onClick();
      // return user to previous page of results
      // disableNavButtons();
    }
  }

  // click event logic for Next button
  function goToNext() {
    if (!active) {
      onClick();
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
          {/* {displayPageContent(6, pageMockData)} */}
        </div>
        <Button type={LinkTypes.BUTTON} href="/" id={PaginationTypes.NEXT} onClick={goToNext} disabled={active}>
          Next
        </Button>
      </nav>
    </div>
  );
};
