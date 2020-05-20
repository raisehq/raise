import React from 'react';
import { Link } from 'gatsby';
import 'semantic-ui-css/semantic.min.css';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import FeaturedImage from '../components/Posts/FeaturedImage';
import { Post as PostData } from '../components/Posts/interfaces';
import { ContainerPost } from '../components/Posts/styles';

const Post = ({
  pageContext: {
    data: {
      featured_image = '',
      author = { first_name: '@raise', last_name: '' },
      title,
      seo_title,
      created,
      body,
      meta_description,
      tags = [],
      slug
    }
  }
}: {
  pageContext: { data: PostData };
}) => {
  const createdDate = new Date(created).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const keywords = tags.length > 0 ? tags.map((tag) => tag.name).join(', ') : undefined;

  return (
    <>
      <Layout>
        <SEO
          title={seo_title}
          description={meta_description}
          tags={keywords}
          url={`${process.env.REACT_APP_WEB_URL}/blog/${slug}`}
          previewImage={featured_image}
          author={`${author.first_name} ${author.last_name}`}
        />
        <ContainerPost>
          <div className="article-body">
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
              }}
            >
              <Link to="/" className="back-home">
                Back to Home
              </Link>
              <Link to="/blog" className="back-home">
                See more articles
              </Link>
            </div>
            <FeaturedImage src={featured_image} />
            <h1 className="title">{title}</h1>
            <div>
              Posted by {author.first_name} {author.last_name} on {createdDate}
            </div>

            <div className="post">
              <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>
          </div>
        </ContainerPost>
      </Layout>
    </>
  );
};

export default Post;
