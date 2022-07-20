import React from 'react';
import { Button } from '../../Button/Button';
import { SearchProps } from './SearchBar.interfaces';

const SearchBar: React.FC<SearchProps> = ({
  addLabelAbove = false,
  label,
  placeholder = label,
  onClick,
  onChange,
  value,
}) => {
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
        name="search"
        className="p-2 mr-1 border rounded"
        onChange={onChange}
        value={value}
      />
      <Button type="submit" onClick={onClick}>
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
