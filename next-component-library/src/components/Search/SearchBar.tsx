import React from 'react';

const SearchBar = () => {
  return (
    <form action="/" method="get">
      <label htmlFor="search">
        <span className="sr-only">Search items</span>
      </label>
      <input type="text" id="search" placeholder="Search items..." name="s" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
