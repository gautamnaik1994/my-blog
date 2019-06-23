import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
// @ts-ignore
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import Layout from '../components/Layout';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import { Frontmatter, SiteMetadata, Site, Mdx, PageContext } from '../types';

// const CategoryList = ({ list = [] }) => (
//   <Fragment>
//     Categories:
//     <ul>
//       {list.map(category => (
//         <li key={category}>
//           <Link to={`/categories/${category}`}>{category}</Link>
//         </li>
//       ))}
//     </ul>
//   </Fragment>
// );

const Post = styled.div`
  grid-column: 3/4;
`;

interface Props {
  data: {
    site: Site;
    mdx: Mdx;
  };
  pageContext: PageContext;
}

export default ({
  data: { site, mdx },
  pageContext: { next, prev },
}: Props) => {
  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <Post>
        <h1 className="m-0">{mdx.frontmatter.title}</h1>
        <small>{mdx.frontmatter.date}</small>
        <Categories categories={mdx.frontmatter.categories} />
        {mdx.frontmatter.banner && (
          <Img
            sizes={mdx.frontmatter.banner.childImageSharp.sizes}
            alt={site.siteMetadata.keywords.join(', ')}
          />
        )}

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
