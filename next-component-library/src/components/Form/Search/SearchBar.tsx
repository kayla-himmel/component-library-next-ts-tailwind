import React from 'react';
import { Button } from '../../Button/Button';
import { LinkTypes } from '../../Button/Button.interfaces';
import { SearchProps } from './SearchBar.interfaces';

const SearchBar: React.FC<SearchProps> = ({ addLabelAbove = false, label, placeholder = label, data }) => {
  return (
    <form action="/" method="get">
      <label htmlFor="search w-full">
        <span className="sr-only">{label}</span>
        <span className={`d-none ${addLabelAbove && 'block'}`}>{label}</span>
      </label>
      <input
        type="text"
        id="search"
        placeholder={placeholder && placeholder}
        name="s"
        className="p-2 mr-1 border rounded"
      />
      <Button type={LinkTypes.SUBMIT}>Search</Button>
    </form>
  );
};

export default SearchBar;
