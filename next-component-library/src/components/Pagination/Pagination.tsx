import { useState } from 'react';
import { Button } from '../Button/Button';
import { LinkTypes, PaginationTypes } from '../Button/Button.interfaces';
import PaginationProps from './Pagination.interfaces';

export const Pagination: React.FC<PaginationProps> = ({ onClick }) => {
  // current page is active
  const [active, setActive] = useState(false);

  // disable previous button if user is viewing first page and disable next button if user is viewing last page
  // function disableNavButtons() {
  // if (key < 0) {
  //   setActive(!active);
  // } else {
  //   setActive(active)
  // }

  // empty array to hold generated page content
  const contentArray = [];

  // map through data in utils/helpers/sample-data.ts file to show 6 results per page
  // const createPageContent = () => {
  //   const buildArray = () => {
  //     for (let i = 0; i <= 25; i++) {
  //       return <div key={i}>Div ${i}</div>;
  //     }
  //   };

  //   return contentArray.push(buildArray);
  // };

  const displayPageContent = () => {
    const resultsMax = 6;
    const buildArray = () => {
      for (let i = 0; i <= 25; i++) {
        return <div id={`id-${i}`}>Div ${i}</div>;
      }
    };
    // eslint-disable-next-line no-console
    console.log(buildArray(), 'buildArray');
    contentArray.push(buildArray);
    // eslint-disable-next-line no-console
    console.log(contentArray, 'contentArray');
    const pageResults = contentArray.slice(0, resultsMax).map((a) => {
      <div key={a.id}>Item ${a}</div>;
    });

    return (
      <div className="pageContent" id="page-1">
        {pageResults}
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

  displayPageContent();
  // eslint-disable-next-line no-console
  console.log(contentArray, 'contentArray');

  return (
    <div className="pagination">
      <nav>
        <Button type={LinkTypes.BUTTON} href="/" id={PaginationTypes.PREVIOUS} onClick={goToPrevious} disabled={active}>
          Previous
        </Button>
        <div>{contentArray}</div>
        {displayPageContent}
        <Button type={LinkTypes.BUTTON} href="/" id={PaginationTypes.NEXT} onClick={goToNext} disabled={active}>
          Next
        </Button>
      </nav>
    </div>
  );
};
