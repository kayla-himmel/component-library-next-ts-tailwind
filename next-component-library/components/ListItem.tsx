import React from 'react';
import Link from 'next/link';

import { Component } from '../interfaces';

type Props = {
  data: Component;
};

const ListItem = ({ data }: Props) => (
  <Link href="/componentLibrary/[name]" as={`/componentLibrary/${data.name}`}>
    <a className="listItem">{data.name}</a>
  </Link>
);

export default ListItem;
