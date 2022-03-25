import React from 'react';
import { LinkComponent as Link } from './Link/Link';
import { Component } from '../../interfaces';

type Props = {
  data: Component;
};

const ListItem = ({ data }: Props) => (
  <Link href="/">
    <a className="listItem">{data.name}</a>
  </Link>
);

export default ListItem;
