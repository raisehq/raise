import React from 'react';
import { BasicLink } from '../components/Links';
import { CardGrid, Title, BreakFlex, ContainerPost } from '../components/Posts/styles';
import Layout from '../components/Layout';
import PostCard from '../components/Posts/Cards';
import { Post } from '../components/Posts/interfaces';
import SEO from '../components/SEO';
import TagManager from '../components/TagManager';
import 'semantic-ui-css/semantic.min.css';

const ArticleGallery = ({
  pageContext: { data: posts }
}: {
  pageContext: {
    data: Post[];
  };
}) => {
  if (!posts.length) {
    return <p>No posts to show.</p>;
  }

  return (
    <>
      <Layout>
        <SEO url={`${process.env.REACT_APP_WEB_URL}/blog`} />
        <TagManager />
        <ContainerPost>
          <CardGrid>
            <Title>
              <h1>Blog</h1>
            </Title>
            <BreakFlex />
            {posts
              .filter((data: any) => data.slug)
              .map((data: any, i: number) => {
                const key = `post-${i}`;
                return <PostCard key={key} {...data} />;
              })}
          </CardGrid>
          <BasicLink to="/" title="Return to Home">
            Return to Home
          </BasicLink>
        </ContainerPost>
      </Layout>
    </>
  );
};

export default ArticleGallery;
