import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const PostItem = styled.div`
  border: 1px solid red;
`;

interface Props {
  link: string;
  title: string;
  date: string;
  excerpt: string;
}

export default ({ link, title, date, excerpt }: Props) => (
  <PostItem>
    <h2>
      <Link to={link}>{title}</Link>
    </h2>
    <small>{date}</small>
    <p>{excerpt}</p>
    <Link to={link}>Continue Reading</Link>
  </PostItem>
);
