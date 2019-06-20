import React, { Fragment } from 'react';
import styled from 'styled-components';

const Hero = styled.header`
  grid-row: 1/2;
  grid-column: 1/-1;
  padding: 100px 20px;
  border: 1px solid gold;
`;

interface Props {
  title: string;
}

export default ({ title }: Props) => <Hero>{title}</Hero>;
