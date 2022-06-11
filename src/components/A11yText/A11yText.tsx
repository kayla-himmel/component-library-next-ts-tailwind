import React from 'react';

export const A11yText = ({ srText, visualText }) => {
  return (
    <>
      <span className="sr-only"> {srText}</span>
      <span aria-hidden>{visualText}</span>
    </>
  );
};
