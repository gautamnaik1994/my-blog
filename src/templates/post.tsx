import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';
// @ts-ignore
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import media from '../utils/MediaQueries';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import Badge from '../components/Badge';
import { Site, Mdx, PageContext } from '../types';

const Banner = styled.div`
  grid-column: 1/-1;
  overflow: hidden;
`;

const Post = styled.div`
  padding: 0 15px;
  grid-column: 3/4;
`;

interface Props {
  data: {
    site: Site;
    mdx: Mdx;
  };
  pageContext: PageContext;
}

const Title = styled.h1`
  margin-bottom: 0;
  ${media.tablet} {
    font-size: 48px;
  }
`;

export default ({
  data: { site, mdx },
  pageContext: { next, prev },
}: Props) => {
  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <Banner>
        {mdx.frontmatter.banner && (
          <Img
            sizes={mdx.frontmatter.banner.childImageSharp.sizes}
            alt={site.siteMetadata.keywords.join(', ')}
          />
        )}
      </Banner>

      <Post>
        <Title>{mdx.frontmatter.title}</Title>
        <small>{mdx.frontmatter.date}</small>
        <div className="half-rem-mt">
          <Badge name={mdx.frontmatter.categories[0]} />
        </div>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
        <Pagination
          nextPagePath={next && next.fields.slug}
          previousPagePath={prev && prev.fields.slug}
          nextPostTitle={next && next.fields.title}
          prevPostTitle={prev && prev.fields.title}
        />
      </Post>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        banner {
          childImageSharp {
            sizes(maxWidth: 900) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        slug
        categories
        keywords
      }
      code {
        body
      }
    }
  }
`;
