import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const StyledNav = styled(Navbar)``;

const ThemeChooser = styled.span`
  border: 1px solid red;
  display: inline-block;
  ${StyledNav}:hover & {
    background-color: green;
  }
`;

interface Props {
  setTheme: (theme: string) => void;
}

export default ({ setTheme }: Props) => (
  <ThemeChooser>
    <button onClick={() => setTheme('dark')}>Dark</button>
    <button onClick={() => setTheme('light')}>Light</button>
  </ThemeChooser>
);
