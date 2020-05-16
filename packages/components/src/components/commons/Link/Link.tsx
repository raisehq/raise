import React from 'react';
import { LinkStyled } from './styles';

const Link = ({ text, onClick = () => null, idAttr, className, ...rest }: any) => (
  <LinkStyled onClick={onClick} id={idAttr} className={className} {...rest}>
    {text}
  </LinkStyled>
);

export default Link;
