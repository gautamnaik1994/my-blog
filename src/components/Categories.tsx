import React, { Fragment } from 'react';
import styled from 'styled-components';
import Link from './Link';

interface CategoryProps {
  activeCategoryIndex?: number;
  activeCategory?: boolean;
  categories: string[];
}

interface CategoryItemProps {
  activeCategory: boolean;
}

const CategoryItem = styled.li<CategoryItemProps>`
  border: 1px solid #03a9f4;
  display: inline-block;
  padding: 3px 8px;
  border-radius: 3px;
  margin: 5px;
  background-color: ${props => (props.activeCategory ? 'red' : ' #03A9F4')};
  box-shadow: 0 0 6px 2px rgba(3, 169, 244, 0.21);
  a {
    color: white;
  }
`;

export default ({ categories = [], activeCategoryIndex }: CategoryProps) => (
  <Fragment>
    <ul>
      {categories.map((category, index) => (
        <CategoryItem
          key={category}
          activeCategory={activeCategoryIndex === index}
        >
          <Link to={`/categories/${category}`}>{category}</Link>
        </CategoryItem>
      ))}
    </ul>
  </Fragment>
);
