import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const PaginationWrapper = styled.div`
  :after {
    content: '';
    display: table;
  }
`;

interface Props {
  nextPagePath?: string;
  previousPagePath?: string;
  nextPostTitle?: string;
  prevPostTitle?: string;
}

export default ({
  nextPagePath,
  previousPagePath,
  nextPostTitle = 'Next Page',
  prevPostTitle = 'Previous Page',
}: Props) => (
  <PaginationWrapper>
    {previousPagePath && (
      <Link
        css={`
          float: left;
        `}
        to={previousPagePath}
      >
        {prevPostTitle}
      </Link>
    )}
    {nextPagePath && (
      <Link
        css={`
          float: right;
        `}
        to={nextPagePath}
      >
        {nextPostTitle}
      </Link>
    )}
  </PaginationWrapper>
);
