import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

const LogoColor = theme('mode', {
  light: 'black',
  dark: 'white',
});

const Logo = styled.svg`
  transition: fill 0.3s ease-in;
  && {
    fill: ${LogoColor};
  }
`;

export default () => (
  <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336 336">
    <path d="M178.2,37.8l-132,176c-1.8,2.3-1.2,5.5,1.2,7.1l130.2,86.6c4.2,2.8,9.5-1.8,7.2-6.4L144,219.6c-0.6-1-0.7-2.2-0.4-3.4 L187.1,42C188.4,36.7,181.5,33.4,178.2,37.8z" />
    <circle cx="218" cy="218" r="25" />
  </Logo>
);
