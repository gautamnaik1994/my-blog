import React, { Fragment } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import media from '../utils/MediaQueries';
import NamedLogo from './NamedLogo';
import Link from './Link';

const DividerColor = theme('mode', {
  light: '#dbdbdb',
  dark: '#414141',
});

const Footer = styled.footer`
  min-height: 150px;
  border-top: 1px solid ${DividerColor};
  border-bottom: 5px solid var(--primary);
  ${media.tablet} {
    display: grid;
    grid-template-columns:
      auto minmax(auto, 200px) minmax(550px, 650px) minmax(0, 200px)
      auto;
    grid-gap: 15px;
  }
  .inner {
    padding: 15px 15px 55px 15px;
    grid-column: 3/4;
  }
  .bottom-info {
    text-align: center;
    small {
      display: block;
    }
    ${media.tablet} {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Grid = styled.div``;

export default () => (
  <Footer>
    <div className="inner">
      <NamedLogo />
      <p>
        Gautam Blogs is created and maintained by Gautam Naik. If you see
        anything broken, you are welcome to create a pull request here. To know
        more about me, visit my personal website{' '}
        <Link title="Personal Website Link" to="www.gautamnaik.netlify.com">
          www.gautamnaik.netlify.com
        </Link>
        .
      </p>
      <div className="bottom-info">
        <small>
          Built using{' '}
          <Link title="GatsbyJs" to="https://www.gatsbyjs.org/">
            GatsbyJs
          </Link>{' '}
          and hosted on{' '}
          <Link title="Netlify" to="https://www.netlify.com/">
            Netlify
          </Link>
        </small>
        <small>&copy; Copyright 2019, Gautam Blogs</small>
      </div>
    </div>
  </Footer>
);
