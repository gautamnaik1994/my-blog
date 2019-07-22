import React, { Fragment } from 'react';
import styled from 'styled-components';
import media from '../utils/MediaQueries';

const Hero = styled.header`
  grid-row: 1/2;
  height: 180px;
  grid-column: 1/-1;
  background: rgba(0, 132, 255, 1);
  background-image: url('abstractbg.svg');
  background-image: url('abstractbg.svg'),
    linear-gradient(
      243.4deg,
      rgba(0, 215, 206, 1) 13%,
      rgba(0, 132, 255, 1) 98%
    );
  background-size: 100%, cover;
  background-position: center;
  ${media.tablet} {
    height: auto;
    background-size: 66%, cover;
  }
`;

interface Props {
  title: string;
}

export default ({ title }: Props) => <Hero></Hero>;
