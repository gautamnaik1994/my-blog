import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import theme from 'styled-theming';
import { lighten } from 'polished';
import SvgLogo from './Logo';
import ThemeChooser from './ThemeChooser';
import media from '../utils/MediaQueries';

const NAVIGATION = [{ to: 'https://gautamnaik.netlify.com/', label: 'About' }];

const navBarBgColor = theme('mode', {
  light: '#fff',
  dark: lighten(0.15, '#121212'),
});

const Navbar = styled.nav`
  transition: background-color 0.3s ease-in;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${navBarBgColor};
  box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.3);
  padding: 0 15px 0 5px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2;
  button {
    margin-left: 5px;
  }
`;

const HomeLink = styled(Link)`
  width: 60px;
  height: 60px;
  display: inline-block;
  margin-right: auto;
  padding: 3px;
`;

interface Props {
  toggleTheme: () => void;
  className?: any;
}

export default ({ toggleTheme, className }: Props) => (
  <Navbar className={className}>
    <HomeLink to="/">
      <SvgLogo />
    </HomeLink>
    {NAVIGATION.map(navigation => (
      <Link key={navigation.label} to={navigation.to}>
        {navigation.label}
      </Link>
    ))}
    <ThemeChooser toggleTheme={toggleTheme} />
  </Navbar>
);
