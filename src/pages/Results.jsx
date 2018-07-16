// @flow

import React from 'react';
import { Button } from '../style';

type PropType = {
  search?: {
    from: string,
    to: string,
    weight: number
  }
};

const Component = ({ search }: PropType) => {
  if (!search) return null;
  const { from, to, weight } = search;
  return (
    <div>
    You can ship {weight}kg from {from} to {to} for only $123,456,789 !
      <Button>Ship it</Button>
    </div>
  );
};

Component.defaultProps = {
  search: undefined,
};

export default Component;
