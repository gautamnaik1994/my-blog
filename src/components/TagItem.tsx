import React, { Fragment } from 'react';
import styled from 'styled-components';
import Link from './Link';

interface Props {
  name: string;
}

const TagItem = styled(Link)`
  & + & {
    margin-left: 10px;
  }
`;

export default ({ name }: Props) => (
  <TagItem to={`/tags/${name}`}>{name}</TagItem>
);
