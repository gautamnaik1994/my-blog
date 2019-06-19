import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import Link from './Link';
import media from '../utils/MediaQueries';

interface CategoryProps {
  activeCategoryIndex?: number;
  activeCategory?: boolean;
  categories: string[];
}

interface CategoryItemProps {
  activeCategory: boolean;
}

const Categories = styled.ul`
  grid-column: 2/3;
  padding: 0;
  padding-bottom: 0px;
  text-align: center;
  white-space: nowrap;
  overflow-x: auto;
  height: auto;
  overflow-y: hidden;
  padding-bottom: 15px;
  ${media.tablet} {
    white-space: normal;
    overflow: hidden;
  }
`;

const CategoryItem = styled.li<CategoryItemProps>`
  display: inline-block;
  padding: 3px 8px;
  color: #626262;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  ${props =>
    props.activeCategory &&
    css`
      &:after {
        content: '';
        position: absolute;
        width: 20px;
        height: 4px;
        background: red;
        border-radius: 13px;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
      }
    `};
  a {
    color: grey;
  }

  ${media.tablet} {
    border: 1px solid #03a9f4;
    padding: 3px 8px;
    border-radius: 3px;
    margin: 5px;
    background-color: ${props => (props.activeCategory ? 'red' : ' #03A9F4')};
    box-shadow: 0 0 6px 2px rgba(3, 169, 244, 0.21);
    ${props =>
      props.activeCategory &&
      css`
        &:after {
          display: none;
        }
      `};

    a {
      color: white;
    }
  }
`;

export default ({ categories = [], activeCategoryIndex }: CategoryProps) => (
  <Fragment>
    <Categories>
      {categories.map((category, index) => (
        <CategoryItem
          key={category}
          activeCategory={activeCategoryIndex === index}
        >
          <Link to={`/categories/${category}`}>{category}</Link>
        </CategoryItem>
      ))}
    </Categories>
  </Fragment>
);
