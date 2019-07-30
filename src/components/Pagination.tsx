import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const PaginationWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
  background-color: #383838;
  z-index: 1;
  a {
    background-color: var(--primary);
    padding: 3px 10px;
    color: var(--bodyColor);
    display: inline-block;
    position: relative;
    :after {
      content: '';
      border-width: 15px;
      border-color: #3f51b5;
      border-style: solid;
      /* width: 30px; */
      /* height: 60px; */
      position: absolute;
      right: -29px;
      top: 0px;
      border-bottom-color: transparent;
      border-right-color: transparent;
      /* background-color: #fb2a2a; */
      border-top-color: transparent;
    }
  }
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
  nextPostTitle = 'Next',
  prevPostTitle = 'Prev',
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
