import React, { useLayoutEffect, useState, useEffect } from 'react';
import { graphql } from 'gatsby';
//import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
//import Link from '../components/Link';
import Hero from '../components/Hero';
import PostItem from '../components/PostItem';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import { Frontmatter, SiteMetadata, Site } from '../types';

const BlogWrapper = styled.div`
  grid-column: 3/4;
  padding: 0px 10px;
`;

const HeroWrapper = styled.div`
  //grid-row: 1/2;
  grid-column: 1/-1;
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
    tags: string[];
  };
  location?: any;
}

const Blog = ({
  data: { site, allMdx },
  pageContext: { pagination, categories, activeCategoryIndex, tags },
  location: { state },
}: Props) => {
  const { page, nextPagePath, previousPagePath } = pagination;

  const posts = page.map((id: number) =>
    allMdx.edges.find((edge: { node: { id: number } }) => edge.node.id === id),
  );

  const [showHero, setShowHero] = useState<boolean>(true);

  //useEffect(() => {
  //console.log('Called Effects');
  //if (state && state.fromCategoryItem) {
  ////setShowHero(false);
  //setScrollPos(300);
  //console.log('Called Effects inside');
  ////window.scrollTo(0, 300);
  //}
  //}, [pathname]);
  useLayoutEffect(() => {
    console.log('Called Layout Effects');
    if (state && state.fromCategoryItem) {
      console.log('Layout Effects indide');
      setShowHero(false);
    }
  }, []);

  return (
    <Layout site={site}>
      <HeroWrapper>
        <Hero showHero={showHero} title="Welcome to Blog" />
      </HeroWrapper>
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
            category={node.frontmatter.categories}
            readTime={node.timeToRead}
          />
        ))}
        {posts.map(({ node }: any) => (
          <PostItem
            key={node.id}
            link={node.frontmatter.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            tags={node.frontmatter.tags}
            category={node.frontmatter.categories}
            readTime={node.timeToRead}
          />
        ))}
        {posts.map(({ node }: any) => (
          <PostItem
            key={node.id}
            link={node.frontmatter.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            tags={node.frontmatter.tags}
            category={node.frontmatter.categories}
            readTime={node.timeToRead}
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
          wordCount {
            words
          }
          timeToRead
        }
      }
    }
  }
`;
