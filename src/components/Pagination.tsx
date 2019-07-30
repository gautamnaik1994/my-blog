import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import Link from './Link';
import media from '../utils/MediaQueries';
import { lighten } from 'polished';

const color = theme('mode', {
  light: '#fff',
  dark: '#333',
});

const navBarBgColor = theme('mode', {
  light: '#fff',
  dark: lighten(0.15, '#121212'),
});

const PaginationWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 12px;
  background-color: ${navBarBgColor};
  border-radius: 20px 20px 0 0;
  z-index: 1;
  box-shadow: 0px -1px 9px -2px rgba(0, 0, 0, 0.25);
  a {
    background-color: var(--primary);
    padding: 3px 10px;
    color: ${color};
    display: inline-block;
    position: relative;
    border-radius: 4px;
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    :after {
      //content: '';
      //border-width: 15px;
      //border-color: var(--primary);
      //border-style: solid;
      //position: absolute;
      //right: -29px;
      //top: 0px;
      //border-bottom-color: transparent;
      //border-right-color: transparent;
      //border-top-color: transparent;
    }
    &.left {
      float: left;
      border-top-left-radius: 10px;
    }
    &.right {
      float: right;
      border-top-right-radius: 10px;
    }
  }
  :after {
    content: '';
    display: table;
    clear: both;
  }
  ${media.tablet} {
    position: static;
    background-color: transparent;
    padding: 5px 0 35px 0;
    max-width: 200px;
    a {
      border-radius: 4px;
      &.left {
        border-top-left-radius: 4px;
      }
      &.right {
        border-top-right-radius: 4px;
      }
    }
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
      <Link className="left" to={previousPagePath}>
        {prevPostTitle}
      </Link>
    )}
    {nextPagePath && (
      <Link className="right" to={nextPagePath}>
        {nextPostTitle}
      </Link>
    )}
  </PaginationWrapper>
);
