import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import LogoImg from '../../assets/logo.png';

const NAVIGATION = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
];

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    margin-left: 5px;
  }
`;

const Logo = styled(Link)`
  border: 1px solid black;
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
}

export default ({ setTheme }: Props) => (
  <Navbar>
    <Logo to="/">
      <img src={LogoImg} alt="Home" />
    </Logo>
    {NAVIGATION.map(navigation => (
      <Link key={navigation.label} to={navigation.to}>
        {navigation.label}
      </Link>
    ))}
    <button onClick={() => setTheme('dark')}>Dark</button>
    <button onClick={() => setTheme('light')}>Light</button>
  </Navbar>
);
