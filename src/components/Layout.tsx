import React, { Fragment, useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { desaturate } from 'polished';
import '../global.d.ts';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import 'prismjs/themes/prism-okaidia.css';
import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';
import '../styles/style.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import { MDXLayoutComponents, MDXGlobalComponents } from './mdx';
import { GlobalStyle } from './GlobalStyle';
import { LayoutProps } from '../types';
import { ThemeProvider } from 'styled-components';
import media from '../utils/MediaQueries';
import { primaryCol, desaturatedPrimaryCol } from '../utils/colors';
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
//const primaryCol = '#3F51B5';
//const desaturatedPrimaryCol = '#9fa8da';

const Grid = styled.div`
  ${media.tablet} {
    display: grid;
    grid-template-columns:
      auto minmax(auto, 200px) minmax(550px, 650px) minmax(0, 200px)
      auto;
    //grid-template-rows: minmax(0, 50vh) auto;
    grid-gap: 15px;
  }
  margin-top: 60px;
`;

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
  const initialThemeValue =
    (typeof window !== 'undefined' &&
      window.localStorage &&
      localStorage.getItem('theme')) ||
    'light';

  const [theme, setTheme] = useState<string | undefined>(initialThemeValue);

  const toggleTheme = (): void => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
  };

  // useEffect(() => {
  //   toggleTheme(localStorage.getItem('theme') || 'dark');
  //   console.log('USE useEffect');
  // }, [theme]);

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
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700|Merriweather:400,400i,700&display=swap"
          rel="stylesheet"
        />
        <script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
      </Helmet>
      <ThemeProvider
        theme={{
          mode: theme,
          primary: theme === 'light' ? primaryCol : desaturatedPrimaryCol,
        }}
      >
        <Fragment>
          <GlobalStyle />
          <MDXProvider
            components={{
              ...MDXLayoutComponents,
              ...MDXGlobalComponents,
            }}
          >
            <Fragment>
              <Navbar toggleTheme={toggleTheme} />
              <Grid>{children}</Grid>
              <Footer />
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
