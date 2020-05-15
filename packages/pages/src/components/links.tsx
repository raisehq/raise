import { Link } from 'gatsby';
import React from 'react';
import { LinkComponent } from '@raisehq/components';

export const BasicLink: React.FC<LinkComponent> = ({ to, text, key, ...props }) => (
  <a key={key} href={to} {...props}>
    {text}
  </a>
);

export const GatsbyLink: React.FC<LinkComponent> = ({ to, text, key, ...props }) => (
  <Link key={key} to={to} {...props}>
    {text}
  </Link>
);
