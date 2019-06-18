import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import LogoImg from '../../assets/logo.png';
import ThemeChooser from './ThemeChooser';

const NAVIGATION = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
];

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.3);
  button {
    margin-left: 5px;
  }
`;

const Logo = styled(Link)`
  width: 60px;
  height: 60px;
  display: inline-block;
  margin-right: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  setTheme: (theme: string) => void;
  className?: any;
}

export default ({ setTheme, className }: Props) => (
  <Navbar className={className}>
    <Logo to="/">
      <img src={LogoImg} alt="Home" />
    </Logo>
    {NAVIGATION.map(navigation => (
      <Link key={navigation.label} to={navigation.to}>
        {navigation.label}
      </Link>
    ))}
    <button>Theme</button>
    <ThemeChooser setTheme={setTheme} />
  </Navbar>
);
