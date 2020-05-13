import { Link } from 'react-router-dom';
import React from 'react';
import { LinkComponent } from '@raisehq/components';

export const ReactLink: React.FC<LinkComponent> = ({ to, title, key, ...props }) => (
  <Link key={key} to={to} {...props}>
    {title}
  </Link>
);

export default ReactLink;
