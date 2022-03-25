import * as React from 'react';
import ListItem from './ListItem';
import { Component } from '../../interfaces';

type Props = {
  items: Component[];
};

const List = ({ items }: Props) => (
  <ul className="listOfLinks">
    {items.map((item) => (
      <li key={item.name}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
