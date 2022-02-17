import * as React from 'react';

import { Component } from '../interfaces';

type ListDetailProps = {
  item: Component;
};

const ListDetail = ({ item: component }: ListDetailProps) => (
  <div>
    <h1>Detail for {component.name}</h1>
  </div>
);

export default ListDetail;
