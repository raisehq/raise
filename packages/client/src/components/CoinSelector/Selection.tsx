import React from 'react';
import { TokenImage, Child } from '../HeaderBalance/TokenBalance.styles';

const Selection = ({ imageUrl, name, ...props }) => {
  return (
    <Child {...props}>
      <TokenImage src={imageUrl} />
      <div>{name}</div>
    </Child>
  );
};

export default Selection;
