import React, { Fragment } from 'react';
import styled from 'styled-components';
import media from '../utils/MediaQueries';
import NamedLogo from './NamedLogo';

const Footer = styled.footer`
  min-height: 150px;
  border-top: 1px solid #262626;
  border-bottom: 8px solid var(--primary);
  ${media.tablet} {
    display: grid;
    grid-template-columns:
      auto minmax(auto, 200px) minmax(550px, 650px) minmax(0, 200px)
      auto;
    grid-gap: 15px;
    margin-top: 25px;
  }
  .inner {
    padding: 15px 15px 35px 15px;
    grid-column: 3/4;
  }
`;

const Grid = styled.div``;

export default () => (
  <Footer>
    <div className="inner">
      <NamedLogo />
      <p>
        Consectetur exercitationem ipsam eligendi consequuntur quasi. Labore
        exercitationem repudiandae similique necessitatibus optio Soluta nisi ab
        nobis rerum eum? Ullam cupiditate animi hic deleniti explicabo! Cum modi
        quasi neque commodi facere.{' '}
      </p>
    </div>
  </Footer>
);
