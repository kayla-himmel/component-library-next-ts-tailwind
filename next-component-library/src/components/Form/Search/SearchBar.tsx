import React from 'react';
import { Button } from '../../Button/Button';
import { LinkTypes } from '../../Button/Button.interfaces';

const SearchBar = () => {
  return (
    <form action="/" method="get">
      <label htmlFor="search">
        <span className="sr-only">Search items</span>
      </label>
      <input type="text" id="search" placeholder="Search items..." name="s" className="p-2 mr-1 border rounded" />
      <Button type={LinkTypes.SUBMIT}>Search</Button>
    </form>
  );
};

export default SearchBar;
