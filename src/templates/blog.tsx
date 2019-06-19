import React from 'react';
import { graphql } from 'gatsby';
//import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
//import Link from '../components/Link';
import PostItem from '../components/PostItem';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import { Frontmatter, SiteMetadata, Site } from '../types';

const BlogWrapper = styled.div`
  grid-column: 3/4;
`;

interface Props {
  data: { site: Site; allMdx: { edges: [] } };
  pageContext: {
    pagination: {
      page: [];
      nextPagePath: string;
      previousPagePath: string;
    };
    categories: string[];
    activeCategoryIndex: number;
  };
}

const Blog = ({
  data: { site, allMdx },
  pageContext: { pagination, categories, activeCategoryIndex },
}: Props) => {
  const { page, nextPagePath, previousPagePath } = pagination;

  const posts = page.map((id: number) =>
    allMdx.edges.find((edge: { node: { id: number } }) => edge.node.id === id),
  );

  return (
    <Layout site={site}>
      <Categories
        activeCategoryIndex={activeCategoryIndex}
        categories={categories}
      />
      <BlogWrapper>
        {posts.map(({ node }: any) => (
          <PostItem
            key={node.id}
            link={node.frontmatter.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            tags={node.frontmatter.tags}
            category={node.frontmatter.category}
          />
        ))}
        <Pagination
          nextPagePath={nextPagePath}
          previousPagePath={previousPagePath}
        />
      </BlogWrapper>
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
            tags
          }
        }
      }
    }
  }
`;
