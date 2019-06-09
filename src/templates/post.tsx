import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
// @ts-ignore
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import Layout from '../components/Layout';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import { Frontmatter, SiteMetadata, Site } from '../types';
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

interface Props {
  data: {
    site: Site;
    mdx: { edges: []; code: { body: string }; frontmatter: any };
  };
  pageContext: { next: { fields: any }; prev: { fields: any } };
}

export default function Post({
  data: { site, mdx },
  pageContext: { next, prev },
}: Props) {
  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <h1>{mdx.frontmatter.title}</h1>
      <h2>{mdx.frontmatter.date}</h2>
      <Categories categories={mdx.frontmatter.categories} />
      {mdx.frontmatter.banner && (
        <Img
          sizes={mdx.frontmatter.banner.childImageSharp.sizes}
          alt={site.siteMetadata.keywords.join(', ')}
        />
      )}

      <MDXRenderer>{mdx.code.body}</MDXRenderer>
      <hr />
      <Pagination
        nextPagePath={next.fields.slug}
        previousPagePath={prev.fields.slug}
        nextPostTitle={next.fields.title}
        prevPostTitle={prev.fields.title}
      />
    </Layout>
  );
}

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
