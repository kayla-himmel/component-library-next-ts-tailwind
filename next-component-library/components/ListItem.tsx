import React from 'react';
import { LinkComponent } from './Links/Link';
import { Component } from '../interfaces';
import { LinkTypes } from './Links/Link.interfaces';

type Props = {
  data: Component;
};

const ListItem = ({ data }: Props) => (
  <LinkComponent
    className="font-bold"
    href="/componentLibrary/[name]"
    type={LinkTypes.LINK}
    as={`/componentLibrary/${data.name}`}
  >
    {data.name}
  </LinkComponent>
);

export default ListItem;
