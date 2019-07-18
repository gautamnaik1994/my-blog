import { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';
import media from '../utils/MediaQueries';
import {
  primaryCol,
  desaturatedPrimaryCol,
  darkBackgroundColor,
  darkBackgroundTextColor,
} from '../utils/colors';

const themeModes = {
  DARK: 'dark',
  LIGHT: 'light',
};
//const bodyBackgroundColor = theme('mode', {
//[themeModes.LIGHT]: '#fff',
//[themeModes.DARK]: '#000',
//});

const _primaryCol = theme('mode', {
  light: primaryCol,
  dark: desaturatedPrimaryCol,
});

const bodyBackgroundColor = theme('mode', {
  light: '#fff',
  dark: darkBackgroundColor,
});

const bodyColor = theme('mode', {
  light: '#333',
  dark: darkBackgroundTextColor,
});

interface Props {
  theme?: { primary: string };
}

export const GlobalStyle = createGlobalStyle<Props>`
    :root{
    --primary:${_primaryCol};
    --bodyBackgroundColor:${bodyBackgroundColor};
    --bodyColor:${bodyColor};
    }
    html,body{
    font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"
    }
    body {
        transition:background-color 0.3s ease-in,color 0.3s ease-in;
        background-color: var(--bodyBackgroundColor);
        color:var(--bodyColor);
    }

    button{
        cursor:pointer;
    }

    a{
        text-decoration:none;
        color:var(--primary);
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
    .m-0{
        margin:0!important;
    }
    .mb-0{
        margin-bottom:0!important;
    }
    .date{
        color: #9E9E9E;
    }
    .category-shadow{

    box-shadow:0 4px 3px 0px rgba(0, 0, 0, 0.16);
        ${media.tablet}{
            box-shadow:none;
        }
    }
    .show-for-tablet{
    display:none;
    ${media.tablet}{
    display:block;
    }
    }
    .half-rem-mt{
    margin-top:0.5rem;
    }

`;
