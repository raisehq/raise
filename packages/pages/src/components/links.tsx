import { Link } from 'gatsby';
import React from 'react';
import { LinkComponent } from '@raisehq/components';

export const BasicLink: React.FC<LinkComponent> = ({ to, title, key, ...props }) => (
  <a key={key} href={to} {...props}>
    {title}
  </a>
);

export const GatsbyLink: React.FC<LinkComponent> = ({ to, title, key, ...props }) => (
  <Link key={key} to={to} {...props}>
    {title}
  </Link>
);
