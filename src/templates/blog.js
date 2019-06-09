import React from 'react';
import { graphql } from 'gatsby';
//import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
//import Link from '../components/Link';
import PostItem from '../components/PostItem';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';

const BlogWrapper = styled.div`
  width: 768px;
  margin: 0 auto;
`;

const Blog = ({
  data: { site, allMdx },
  pageContext: { pagination, categories, activeCategoryIndex },
}) => {
  const { page, nextPagePath, previousPagePath } = pagination;

  const posts = page.map(id =>
    allMdx.edges.find(edge => edge.node.id === id),
  );

  return (
    <Layout site={site}>
      <div>
        All categories on the blog:{' '}
        <Categories
          activeCategoryIndex={activeCategoryIndex}
          categories={categories}
        />
      </div>
      <BlogWrapper>
        {posts.map(({ node: post }) => (
          <PostItem
            key={post.id}
            link={post.frontmatter.slug}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
          />
        ))}
      </BlogWrapper>

      <hr />
      <Pagination
        nextPagePath={nextPagePath}
        previousPagePath={previousPagePath}
      />
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            categories
            keywords
          }
        }
      }
    }
  }
`;
