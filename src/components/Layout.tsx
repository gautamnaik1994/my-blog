import React, { Fragment, useState } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import '../global.d.ts';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import 'prismjs/themes/prism-okaidia.css';
import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';
import Navbar from './Navbar';
import Hero from './Hero';
import { MDXLayoutComponents, MDXGlobalComponents } from './mdx';
import { GlobalStyle } from './GlobalStyle';
import { LayoutProps } from '../types';
import { ThemeProvider } from 'styled-components';

const themes = {
  DARK: 'dark',
  LIGHT: 'light',
};

//const setTheme = (theme: string): void => {
//console.log('Change Theme');
//switch (theme) {
//case themes.LIGHT:
//theme = themes.LIGHT;
//break;
//case themes.DARK:
//theme = themes.DARK;
//break;
//default:
//theme = themes.LIGHT;
//}
//console.log(' Theme = ', theme);
//};

// interface LayoutProps {
//   site: Site;
//   frontmatter?: Frontmatter;
//   children: {};
// }
//

export default ({ site, frontmatter = {}, children }: LayoutProps) => {
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

  const [theme, setTheme] = useState('light');

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
      <ThemeProvider theme={{ mode: theme, primary: 'teal' }}>
        <Fragment>
          <GlobalStyle />
          <MDXProvider
            components={{
              ...MDXLayoutComponents,
              ...MDXGlobalComponents,
            }}
          >
            <Fragment>
              <Navbar setTheme={setTheme} />
              <Hero title="Welcome to Blog" />
              {children}
            </Fragment>
          </MDXProvider>
        </Fragment>
      </ThemeProvider>
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
