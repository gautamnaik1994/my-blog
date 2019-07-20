import React from 'react';
import GatsbyLink from 'gatsby-link';

interface Props {
  children: React.ReactNode;
  to: string;
  other?: {};
  css?: any;
}

const Link = ({ children, to, ...other }: Props) => {
  const internal = /^\/(?!\/)/.test(to);

  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

export default Link;
