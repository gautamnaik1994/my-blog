import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import Paragraph from './Paragraph';
import Link from '../Link';

export const MDXLayoutComponents = {
  //h1: (props: any) => <Title {...props} />,
  //h2: (props: any) => <Subtitle {...props} />,
  p: (props: any) => <Paragraph {...props} />,
};

export const MDXGlobalComponents = {
  Link,
};
