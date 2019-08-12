import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { lighten } from 'polished';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
// @ts-ignore
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import media from '../utils/MediaQueries';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import Badge from '../components/Badge';
import { Site, Mdx, PageContext } from '../types';
import { darkBackgroundColor, darkBackgroundTextColor } from '../utils/colors';

const bodyBackgroundColor = theme('mode', {
  light: '#f5f5f5',
  dark: darkBackgroundColor,
});
const postBgColor = theme('mode', {
  light: '#fff',
  dark: lighten(0.05, darkBackgroundColor),
});

const Grid = styled.div`
  ${media.tablet} {
    display: grid;
    grid-template-columns:
      auto minmax(auto, 200px) minmax(550px, 650px) minmax(0, 200px)
      auto;
    //grid-template-rows: minmax(0, 50vh) auto;
  }
  margin-top: 60px;
  background: ${bodyBackgroundColor};
`;

interface BannerProps {
  bgImage: string;
}

const Banner = styled.div<BannerProps>`
  grid-column: 1/-1;
  overflow: hidden;
  position: relative;
  .blur-container {
    background-image: url(${props => props.bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
    filter: blur(30px);
    right: 0;
    top: 0;
  }
`;

const Post = styled.div`
  padding: 20px 15px 15px 15px;
  grid-column: 3/4;
  background: ${postBgColor};
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.126);
`;

interface Props {
  data: {
    site: Site;
    mdx: Mdx;
  };
  pageContext: PageContext;
}

const CustomImg = styled(Img)`
  width: 100%;
  ${media.tablet} {
    width: 650px;
    margin: auto;
  }
`;

const Title = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  ${media.tablet} {
    font-weight: 600;
    font-size: 36px;
    line-height: 47px;
  }
`;

export default ({
  data: { site, mdx },
  pageContext: { next, prev },
}: Props) => {
  console.log('Post Props ', mdx);
  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <Grid>
        {mdx.frontmatter.banner && (
          <Banner bgImage={mdx.frontmatter.banner.childImageSharp.sizes.src}>
            <div className="blur-container"></div>
            {mdx.frontmatter.banner && (
              <CustomImg
                sizes={mdx.frontmatter.banner.childImageSharp.sizes}
                alt={site.siteMetadata.keywords.join(', ')}
              />
            )}
            {/*
          {mdx.frontmatter.banner && (
            <img src={mdx.frontmatter.banner.childImageSharp.sizes.src} />
          )}
          */}
          </Banner>
        )}

        <Post>
          <Title>{mdx.frontmatter.title}</Title>
          <small>{mdx.frontmatter.date}</small>
          <div className="half-rem-mt two-rem-mb">
            <Badge name={mdx.frontmatter.categories[0]} />
          </div>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
          <Pagination
            insidePost
            nextPagePath={next && next.fields.slug}
            previousPagePath={prev && prev.fields.slug}
            nextPostTitle={next && next.fields.title}
            prevPostTitle={prev && prev.fields.title}
          />
        </Post>
      </Grid>
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
          absolutePath
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
