/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';

const getURL = (path: string) => `${process.env.REACT_APP_HOST_URL}/${path}`;

const SEO = ({
  url = 'join',
  title = 'Invest, Grow and Do Good!',
  description = 'Check out the available investment opportunities in our marketplace',
  tags = 'crowdfunding, crowdlending, invest in loans, invest in crypto, online investments, best way to invest money, invest in dai, best investment opportunities',
  author = '@raise_hq',
  previewImage = `${process.env.REACT_APP_HOST_IMAGES}/images/preview.png`
}: {
  url?: string;
  title?: string;
  description?: string;
  tags?: string;
  author?: string;
  previewImage?: string;
}) => (
  <Helmet>
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1, minimal-ui"
    />
    <meta name="theme-color" content="#ffffff" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="google" content="notranslate" />
    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

    <link rel="canonical" href={getURL(url)} />
    <title>{`Raise - ${title}`}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={tags} />
    <meta name="author" content={author} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={`Raise - ${title}`} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={getURL(url)} />
    <meta property="og:site_name" content="Raise" />
    <meta property="og:image" content={previewImage} />
    <meta property="og:image:secure_url" content={previewImage} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="720" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@raise_hq" />
    <meta name="twitter:creator" content="@raise_hq" />
    <meta name="twitter:title" content={`Raise - ${title}`} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={previewImage} />
    <meta name="twitter:image:src" content={previewImage} />
  </Helmet>
);

export default SEO;
