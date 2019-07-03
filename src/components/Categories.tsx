import React, { Fragment, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import Link from './Link';
import media from '../utils/MediaQueries';
import CategoryItem from './CategoryItem';

interface CategoryProps {
  activeCategoryIndex?: number;
  activeCategory?: boolean;
  categories: string[];
}

//interface CategoryItemProps {
//activeCategory: boolean;
//}

const CategoriesBg = theme('mode', {
  light: '#fff',
  dark: '#121212',
});

const Categories = styled.ul`
  grid-column: 2/3;
  padding: 8px;
  margin: 0;
  text-align: center;
  white-space: nowrap;
  overflow-x: auto;
  height: auto;
  overflow-y: hidden;
  padding-bottom: 15px;
  top: 60px;
  position: sticky;
  z-index: 1;
  background: ${CategoriesBg};
  transition: box-shadow 0.3s ease-in, background 0.3s ease-in;
  ${media.tablet} {
    background: transparent;
    white-space: normal;
    overflow: hidden;
    height: calc(100vh - 250px);
    text-align: left;
  }
`;

//const CategoryItem = styled.li<CategoryItemProps>`
//display: inline-block;
//padding: 3px 8px;
//color: #626262;
//text-transform: uppercase;
//font-size: 12px;
//font-weight: bold;
//position: relative;
//${props =>
//props.activeCategory &&
//css`
//&:after {
//content: '';
//position: absolute;
//width: 50%;
//min-width: 30px;
//height: 4px;
//background-image: linear-gradient(
//90deg,
//rgb(131, 237, 184) 0%,
//rgb(131, 237, 184) 0.01%,
//rgb(80, 188, 182) 33.15%,
//rgb(239, 64, 86) 67.4%,
//rgb(252, 182, 67) 100%
//);
//background-image: linear-gradient(
//115deg,
//#4fcf70,
//#fad648,
//#a767e5,
//#12bcfe,
//#44ce7b
//);
//border-radius: 13px;
//bottom: -4px;
//left: 50%;
//transform: translateX(-50%);
//}
//`};
//a {
//color: grey;
//}
//
//${media.tablet} {
//border: 1px solid #03a9f4;
//padding: 3px 8px;
//border-radius: 3px;
//margin: 5px;
//background-color: ${props => (props.activeCategory ? 'red' : ' #03A9F4')};
//box-shadow: 0 0 6px 2px rgba(3, 169, 244, 0.21);
//text-transform: capitalize;
//${props =>
//props.activeCategory &&
//css`
//&:after {
//display: none;
//}
//`};
//
//a {
//color: white;
//}
//}
//`;

export default ({ categories = [], activeCategoryIndex }: CategoryProps) => {
  const CategorierRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    var observer = new IntersectionObserver(
      function(entries) {
        if (CategorierRef && CategorierRef.current) {
          // no intersection with screen
          if (entries[0].intersectionRatio < 1) {
            console.log('Inide intersection');
            CategorierRef.current.classList.add('category-shadow');
          }
          // fully intersects with screen
          else if (entries[0].intersectionRatio === 1) {
            console.log('Inide intersection');
            CategorierRef.current.classList.remove('category-shadow');
          }
        }
      },
      { threshold: [0, 1], rootMargin: '-150px 0px 0px 0px' },
    );

    CategorierRef &&
      CategorierRef.current &&
      observer.observe(CategorierRef.current);
  });

  return (
    <Categories ref={CategorierRef}>
      <p className="show-for-tablet">Categories</p>
      {categories.map((category, index) => (
        <CategoryItem
          key={category}
          activeCategory={activeCategoryIndex === index}
          category={category}
        />
      ))}
    </Categories>
  );
};
