import React from 'react';
import styled from 'styled-components';
import Link from '../components/Link';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    text-align: center;
    .number {
      line-height: 79px;
      font-size: 13rem;
      font-weight: lighter;
      &:before,
      &:after {
        content: '4';
        font-size: 0.45em;
        position: relative;
        top: -0.4em;
      }
    }
  }
`;

export default () => (
  <Wrapper>
    <div className="inner">
      <div className="number">&bull;</div>
      <Link to="/" title="Home">
        Home
      </Link>
    </div>
  </Wrapper>
);
