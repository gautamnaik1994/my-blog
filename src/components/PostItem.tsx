import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import media from '../utils/MediaQueries';

const bottomPadding = 30;

const PostItem = styled.div`
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
  padding-bottom: ${bottomPadding}px;
  border-radius: 5px 5px 2px 2px;
  margin-bottom: 15px;
  position: relative;
  border-bottom: 0;
  ${media.tablet} {
    border-bottom: 6px solid ${props => props.theme.primary};
  }
`;

const ReadMore = styled(Link)`
  display: block;
  color: white;
  background-color: teal;
  text-align: center;
  padding: 5px;
  position: absolute;
  bottom: -1px;
  border-radius: 0 0 2px 2px;
  right: 0;
  left: 0;
  ${media.tablet} {
    border-radius: 0 0 2px 0px;
    padding: 5px 10px;
    margin: 0;
    right: 0;
    left: auto;
    overflow: hidden;
    padding-left: 20px;
    :before {
      content: '';
      position: absolute;
      width: 40px;
      height: 50px;
      transform: rotate(29deg);
      left: -29px;
      top: -17px;
      background-color: #ffffff;
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
}

export default ({ link, title, date, excerpt }: Props) => (
  <PostItem>
    <h2 className="m-0">
      <Link to={link}>{title}</Link>
    </h2>
    <small>{date}</small>
    <p>{excerpt}</p>
    <ReadMore to={link}>Continue Reading</ReadMore>
  </PostItem>
);
