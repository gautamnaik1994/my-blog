import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';

import 'prismjs/themes/prism-okaidia.css';

import Link from './Link';
import { MDXLayoutComponents, MDXGlobalComponents } from './mdx';
import { GlobalStyle } from './GlobalStyle';
import { Frontmatter, SiteMetadata, Site } from '../types';

const NAVIGATION = [
  { to: '/', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: 'https://roadtoreact.com', label: 'Courses' },
];

interface LayoutProps {
  site: Site;
  frontmatter?: Frontmatter;
  children: {};
}

export default ({
  site,
  frontmatter = {
    title: '',
    slug: '',
    date: '',
    keywords: [],
    description: '',
  },
  children,
}: LayoutProps) => {
  const {
    title,
    description: siteDescription,
    keywords: siteKeywords,
  } = site.siteMetadata;

  const {
    keywords: frontmatterKeywords,
    description: frontmatterDescription,
  } = frontmatter;

  const keywords = (frontmatterKeywords || siteKeywords).join(', ');
  const description = frontmatterDescription || siteDescription;

  return (
    <Fragment>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <GlobalStyle />
      <MDXProvider
        components={{
          ...MDXLayoutComponents,
          ...MDXGlobalComponents,
        }}
      >
        <Fragment>
          <ul>
            {NAVIGATION.map(navigation => (
              <li key={navigation.label}>
                <Link to={navigation.to}>{navigation.label}</Link>
              </li>
            ))}
          </ul>
          {children}
        </Fragment>
      </MDXProvider>
    </Fragment>
  );
};

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
      author
      keywords
    }
  }
`;
