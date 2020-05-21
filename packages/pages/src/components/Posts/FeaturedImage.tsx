import React from 'react';
import { Image } from './interfaces';

const FeaturedImage = ({ src }: Image) => (
  <div
    className="featured-img"
    style={{ backgroundImage: `url("${src}")`, backgroundSize: `100%` }}
  />
);

export default FeaturedImage;
