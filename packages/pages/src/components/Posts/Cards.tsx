import React from 'react';
import { Link } from 'gatsby';
import FeaturedImage from './FeaturedImage';
import { CardBox } from './styles';
import { Post } from './interfaces';

const Cards = ({
  featured_image = '',
  author = { first_name: 'Raise', last_name: '' },
  title,
  summary,
  created,
  slug
}: Post) => {
  const createdDate = new Date(created).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return (
    <Link to={`/blog/${slug}`} title={title}>
      <CardBox>
        <FeaturedImage src={featured_image} />
        <div className="post-content">
          <div className="post-meta">
            {author.first_name} {author.last_name} on {createdDate}
          </div>
          <h3 className="post-title">{title}</h3>
          <p className="post-summary">{summary}</p>
        </div>
      </CardBox>
    </Link>
  );
};

export default Cards;
