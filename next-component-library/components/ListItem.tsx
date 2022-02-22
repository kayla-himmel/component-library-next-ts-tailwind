import React from 'react';
import { Button } from './Button/Button';
import { Component } from '../interfaces';
import { LinkTypes } from './Button/Button.interfaces';

type Props = {
  data: Component;
};

const ListItem = ({ data }: Props) => (
  <Button
    className="font-bold"
    href="/componentLibrary/[name]"
    type={LinkTypes.LINK}
    as={`/componentLibrary/${data.name}`}
  >
    {data.name}
  </Button>
);

export default ListItem;
