import React, { Fragment, useState, useEffect, useLayoutEffect } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, useStaticQuery, graphql } from 'gatsby';

import '../global.d.ts';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import 'prismjs/themes/prism-tomorrow.css';
import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';
import '../styles/style.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { MDXLayoutComponents, MDXGlobalComponents } from './mdx';
import { GlobalStyle } from './GlobalStyle';
import { LayoutProps, Site, Frontmatter } from '../types';
import { ThemeProvider } from 'styled-components';
import { primaryCol, desaturatedPrimaryCol } from '../utils/colors';

// interface LayoutProps {
//   site: Site;
//   frontmatter?: Frontmatter;
//   children: {};
// }
//
//const primaryCol = '#3F51B5';
//const desaturatedPrimaryCol = '#9fa8da';

interface MyState {
  theme: string;
  site: Site;
  frontmatter: Frontmatter;
}

class Layout extends React.Component<LayoutProps, MyState> {
  public constructor(props: LayoutProps) {
    super(props);
    let initialThemeValue = 'light';
    if (typeof window !== 'undefined' && window.localStorage) {
      if (localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', 'light');
        initialThemeValue = 'light';
      } else {
        initialThemeValue = localStorage.getItem('theme') || 'light';
      }
    }
    this.state = {
      theme: initialThemeValue,
      site: props.data.site,
      frontmatter: props.data.frontmatter || {},
    };
  }

  private toggleTheme = (): void => {
    const currentTheme = this.state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    this.setState({ theme: currentTheme });
  };

  public render() {
    const {
      title,
      description: siteDescription,
      keywords: siteKeywords,
    } = this.state.site.siteMetadata;

    const {
      keywords: frontmatterKeywords,
      description: frontmatterDescription,
    } = this.state.frontmatter;

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
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600,700|Merriweather:400,400i,700&display=swap"
            rel="stylesheet"
          />
          <meta name="robots" content="noindex" />
          <script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver" />
        </Helmet>
        <ThemeProvider
          theme={{
            mode: this.state.theme,
            primary:
              this.state.theme === 'light' ? primaryCol : desaturatedPrimaryCol,
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
                <Navbar toggleTheme={this.toggleTheme} />
                {this.props.children}
                <Footer />
              </Fragment>
            </MDXProvider>
          </Fragment>
        </ThemeProvider>
      </Fragment>
    );
  }
}

/*
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
  //const initialThemeValue = (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('theme')) || 'light';

  let initialThemeValue = 'light';
  if (typeof window !== 'undefined' && window.localStorage) {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
      initialThemeValue = 'light';
    } else {
      initialThemeValue = localStorage.getItem('theme') || 'light';
    }
  }

  const [theme, setTheme] = useState<string>(initialThemeValue);

  const toggleTheme = (): void => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    setTheme(currentTheme);
  };

  // useLayoutEffect(() => {
  //   toggleTheme(localStorage.getItem('theme') || 'light');
  //   setTheme(initialThemeValue);
  //   console.log('USE useEffect');
  // }, []);

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
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600,700|Merriweather:400,400i,700&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="noindex" />
        <script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver" />
      </Helmet>
      <ThemeProvider
        theme={{
          mode: theme || initialThemeValue,
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
              {children}
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
*/

export default (props: any = {}) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

// export default (props: any) => {
//   const data = useStaticQuery(graphql`
//     fragment site on Site {
//       siteMetadata {
//         title
//         description
//         author
//         keywords
//       }
//     }
//   `);
//   return <Layout data={data} {...props} />;
// };
