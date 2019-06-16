import React, { Fragment } from 'react';
import styled from 'styled-components';

const Hero = styled.header`
  padding: 100px 20px;
  border: 1px solid gold;
`;

interface Props {
  title: string;
}

export default ({ title }: Props) => <Hero>{title}</Hero>;
