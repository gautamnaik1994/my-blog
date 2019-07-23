import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import media from '../utils/MediaQueries';

const bgAnim = keyframes`
    0%{
        transform:translateX(0);
    }
    100%{
        transform:translateX(-2180px);
    }

`;

const Hero = styled.header`
  grid-row: 1/2;
  position: relative;
  height: 180px;
  grid-column: 1/-1;
  background: rgba(0, 132, 255, 1);
  background-image: linear-gradient(
    243.4deg,
    rgba(0, 215, 206, 1) 13%,
    rgba(0, 132, 255, 1) 98%
  );
  overflow: hidden;
  .inner {
  }

  .img-bg {
    background-position: center;
    background-size: 100%;
    position: absolute;
    left: 0;
    width: 6540px;
    top: 0;
    bottom: 0;
    background-image: url('abstractbg.svg');
    animation: ${bgAnim} 54s infinite linear;
    ${media.tablet} {
      height: auto;
      background-size: 66%;
    }
  }
  ${media.tablet} {
    height: auto;
  }
`;

interface Props {
  title: string;
}

export default ({ title }: Props) => (
  <Hero>
    <div className="img-bg"></div>
    <div className="inner"></div>
  </Hero>
);
