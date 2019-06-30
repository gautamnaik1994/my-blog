import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import Paragraph from './mdx/Paragraph';
import { darken } from 'polished';
import Link from './Link';
import TagItem from './TagItem';
import media from '../utils/MediaQueries';

const bottomPadding = 44;
const backgroundColor = theme('mode', {
  light: '#fff',
  dark: darken(0.7, '#e1e1e1'),
});

const PostItem = styled.div`
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.25);
  padding: 15px;
  padding-bottom: ${bottomPadding}px;
  border-radius: 5px 5px 2px 2px;
  margin-bottom: 15px;
  position: relative;
  background: ${backgroundColor};
  border-bottom: 0;
  ${media.tablet} {
    border-bottom: 6px solid ${props => props.theme.primary};
  }
`;
const StyledParagraph = styled(Paragraph)`
  font-size: 16px;
  line-height: 1.85;
`;

const ReadMore = styled(Link)`
  display: block;
  color: white;
  background-color: teal;
  text-align: center;
  padding: 10px;
  position: absolute;
  bottom: -1px;
  border-radius: 0 0 2px 2px;
  right: 0;
  left: 0;
  ${media.tablet} {
    border-radius: 0 0 2px 0px;
    padding: 5px 20px;
    margin: 0;
    right: 0;
    left: auto;
    overflow: hidden;
    padding-left: 25px;
    :before {
      content: '';
      position: absolute;
      width: 40px;
      height: 50px;
      transform: rotate(29deg);
      left: -29px;
      top: -17px;
      background-color: ${backgroundColor};
    }
  }
`;

interface Props {
  link: string;
  title: string;
  date: string;
  excerpt: string;
  category: string[];
  tags: string[];
  wordCount: number;
  readTime: number;
}

export default ({
  link,
  title,
  date,
  excerpt,
  category,
  tags,
  wordCount,
  readTime,
}: Props) => (
  <PostItem>
    <small>{category[0]}</small>
    <small>{wordCount}</small>
    <div>{readTime}</div>
    <h2 className="m-0">
      <Link to={link}>{title}</Link>
    </h2>
    <small>{date}</small>
    <StyledParagraph>{excerpt}</StyledParagraph>
    {tags.map((tag, index) => (
      <TagItem key={index} name={tag} />
    ))}
    <ReadMore to={link}>Continue Reading</ReadMore>
  </PostItem>
);
