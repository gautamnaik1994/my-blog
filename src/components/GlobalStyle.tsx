import { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';

const themeModes = {
  DARK: 'dark',
  LIGHT: 'light',
};
//const bodyBackgroundColor = theme('mode', {
//[themeModes.LIGHT]: '#fff',
//[themeModes.DARK]: '#000',
//});
const bodyBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#2a2a2a',
});

const bodyColor = theme('mode', {
  light: '#333',
  dark: '#e1e1e1',
});

export const GlobalStyle = createGlobalStyle`
    body {
        transition:background-color 0.3s ease-in,color 0.3s ease-in;
        background-color: ${bodyBackgroundColor};
        color:${bodyColor};
    }

    button{
        cursor:pointer;
    }

    a{
        text-decoration:none;
    }

    ${() => {
      /* Override PrismJS Defaults */ return null;
    }}

    pre {
        background-color: #2f1e2e !important;
        border-radius: 4px;
        font-size: 14px;
    }

    .gatsby-highlight-code-line {
        background-color: #4f424c;
        display: block;
        margin-right: -1em;
        margin-left: -1em;
        padding-right: 1em;
        padding-left: 1em;
    }
`;
