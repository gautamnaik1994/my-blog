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

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section {
    display: block;
    }
    /* HTML5 hidden-attribute fix for newer browsers */
    *[hidden] {
    display: none;
    }
    body {
        line-height: 1;
        transition:all 0.3s ease-in;
        background-color: ${bodyBackgroundColor};
        color:${bodyColor};
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    /* http://www.paulirish.com/2012/box-sizing-border-box-ftw/ (2015/04/28)*/
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    /* Additional resets */
    a {
        text-decoration: none;
        color: inherit;
    }
    button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        background: transparent;
        color: inherit;
        font: inherit;
        text-align: inherit;
        outline: none;
        line-height: inherit;
        -webkit-appearance: none;
    }
    /* Fix antialiasing */
    *, *:before, *:after {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    /* Disable user select on everything but texts */
    *, *:before, *:after {
        user-select: none;
    }
    p, h1, h2, h3, h4, h5, h6, blockquote, pre, ul, ol, li, table, tr, th, td {
        user-select: all;
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
