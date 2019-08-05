import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    font-size: 8rem;
    font-weight: 100;
    .number {
      font-size: 8rem;
      &:before,
      &:after {
        content: '4';
        font-size: 0.5em;
      }
    }
  }
`;

export default () => (
  <Wrapper>
    <div className="inner">
      <div className="number">&bull;</div>
    </div>
  </Wrapper>
);
