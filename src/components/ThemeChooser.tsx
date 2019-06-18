import React from 'react';
import styled from 'styled-components';

const ThemeChooser = styled.span`
  border: 1px solid red;
  display: inline-block;
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
