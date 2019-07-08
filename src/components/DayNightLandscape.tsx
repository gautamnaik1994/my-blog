import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { darken } from 'polished';

// const svgColors = theme('mode', {
//   light: {},
//   dark: {},
// });

const hideForDark = theme('mode', {
  dark: 'none',
});
const hideForLight = theme('mode', {
  light: 'none',
});

const svgColors = theme('mode', {
  dark: css`
    #sky {
      fill: #181c30;
    }

    [data-name='leaves'] {
      fill: #006705;
    }
    [data-name='mnt'] {
      [data-name='main'] {
        fill: #303030;
      }
    }
    [data-name='cloud'] {
      [data-name='light'] {
        fill: #b6b6b6;
      }
      [data-name='dark'] {
        fill: #878787;
      }
    }

    [data-name='hill_front'] {
      [data-name='main'] {
        fill: #096e0e;
      }
    }
    [data-name='hill_back'] {
      [data-name='main'] {
        fill: #0b490d;
      }
    }
    #ground {
      fill: #1b741b;
    }
  `,
});

const DayNightLandscape = styled.div`
  svg {
    #sun,
    [data-name='Balloon'],
    [data-name='boat'] {
      display: ${hideForDark};
    }

    #plane,
    #stars,
    [data-name='beam'] {
      display: ${hideForLight};
    }

    .cls-1 {
      fill: #63c2c8;
    }

    .cls-10,
    .cls-2,
    .cls-5,
    .cls-7 {
      fill: #fff;
    }

    .cls-3 {
      fill: #9a9a9a;
    }

    .cls-4 {
      fill: #f4f4f4;
    }

    .cls-5 {
      opacity: 0.3;
    }

    .cls-5,
    .cls-7 {
      isolation: isolate;
    }

    .cls-6 {
      fill: #009b07;
    }

    .cls-7 {
      opacity: 0.25;
    }

    .cls-8 {
      fill: #590303;
    }

    .cls-9 {
      fill: #319f35;
    }

    .cls-10 {
      opacity: 0.2;
    }

    .cls-11 {
      fill: #1f3847;
    }

    .cls-12 {
      fill: #24ae2a;
    }

    .cls-13 {
      fill: #274459;
    }

    .cls-14 {
      fill: #6c6c6c;
    }

    .cls-15 {
      fill: url(#linear-gradient);
    }

    .cls-16 {
      fill: url(#linear-gradient-2);
    }

    .cls-17 {
      fill: #fafcc8;
    }

    .cls-18,
    .cls-33 {
      opacity: 0.51;
    }

    .cls-18 {
      fill: url(#radial-gradient);
    }

    .cls-19 {
      fill: #36bf36;
    }

    .cls-20 {
      fill: #398ab7;
    }

    .cls-21 {
      fill: #e8e8e8;
    }

    .cls-22 {
      fill: #bd9066;
    }

    .cls-23 {
      fill: #994500;
    }

    .cls-24 {
      fill: #f1a91c;
    }

    .cls-25,
    .cls-28 {
      fill: none;
      stroke: #282828;
      stroke-miterlimit: 10;
    }

    .cls-25 {
      stroke-width: 0.81px;
    }

    .cls-26 {
      fill: #f79494;
    }

    .cls-27 {
      fill: #f94e4e;
    }

    .cls-28 {
      stroke-width: 0.72px;
    }

    .cls-29 {
      fill: #52a8ce;
    }

    .cls-30 {
      fill: #d1d1d1;
    }

    .cls-31 {
      fill: #282828;
    }

    .cls-32 {
      fill: #f7d363;
    }

    .cls-33 {
      fill: url(#radial-gradient-2);
    }
    ${svgColors}
  }
`;

export default () => (
  <DayNightLandscape>
    <svg
      id="mountains"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1920 729"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="938.4"
          y1="384.61"
          x2="1235.59"
          y2="491.85"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffff6e" stopOpacity="0.51" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="1279.94"
          y1="384.61"
          x2="1577.14"
          y2="491.85"
          gradientTransform="matrix(-1, 0, 0, 1, 2192.17, 0)"
          xlinkHref="#linear-gradient"
        />
        <radialGradient
          id="radial-gradient"
          cx="925.12"
          cy="389.64"
          r="18.05"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ff0" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="radial-gradient-2"
          cx="518.92"
          cy="119.89"
          r="172.37"
          xlinkHref="#radial-gradient"
        />
      </defs>
      <title>mountains-01</title>
      <rect id="sky" className="cls-1" width="1920" height="729" />
      <g id="stars">
        <circle className="cls-2" cx="33.94" cy="228" r="3" />
        <circle className="cls-2" cx="224.17" cy="554.91" r="3" />
        <circle className="cls-2" cx="166.13" cy="307.44" r="3" />
        <circle className="cls-2" cx="65.98" cy="407.68" r="3" />
        <circle className="cls-2" cx="292.98" cy="206.5" r="3" />
        <circle className="cls-2" cx="425.66" cy="506.58" r="3" />
        <circle className="cls-2" cx="350.38" cy="347.15" r="3" />
        <circle className="cls-2" cx="488.85" cy="376.88" r="3" />
        <circle className="cls-2" cx="679.41" cy="180.28" r="3" />
        <circle className="cls-2" cx="44.93" cy="573.21" r="3" />
        <circle className="cls-2" cx="875.66" cy="203.5" r="3" />
        <circle className="cls-2" cx="1907.26" cy="122.6" r="3" />
        <circle className="cls-2" cx="1083.74" cy="334.36" r="3" />
        <circle className="cls-2" cx="968.06" cy="310.89" r="3" />
        <circle className="cls-2" cx="1520.21" cy="30.87" r="3" />
        <circle className="cls-2" cx="1368.71" cy="389.64" r="3" />
        <circle className="cls-2" cx="402" cy="47.24" r="3" />
        <circle className="cls-2" cx="1728.68" cy="339.41" r="3" />
        <circle className="cls-2" cx="1650.04" cy="163.5" r="3" />
        <circle className="cls-2" cx="1515.47" cy="326.92" r="3" />
        <circle className="cls-2" cx="1829.4" cy="48.5" r="3" />
        <circle className="cls-2" cx="1874.04" cy="574.54" r="3" />
        <circle className="cls-2" cx="124.19" cy="143.23" r="3" />
        <circle className="cls-2" cx="27.94" cy="50.24" r="3" />
        <circle className="cls-2" cx="202.79" cy="26.13" r="3" />
        <circle className="cls-2" cx="569.37" cy="45.5" r="3" />
        <circle className="cls-2" cx="1106.48" cy="166.5" r="3" />
        <circle className="cls-2" cx="800.02" cy="70.6" r="3" />
        <circle className="cls-2" cx="1002" cy="80" r="3" />
        <circle className="cls-2" cx="1216.23" cy="58.72" r="3" />
        <circle className="cls-2" cx="1355.88" cy="80" r="3" />
        <circle className="cls-2" cx="1477.45" cy="181.11" r="3" />
        <circle className="cls-2" cx="1700.15" cy="90.85" r="3" />
        <circle className="cls-2" cx="1804.26" cy="214.24" r="3" />
        <circle className="cls-2" cx="1754.55" cy="480.13" r="3" />
        <circle className="cls-2" cx="1661.34" cy="560.88" r="3" />
        <circle className="cls-2" cx="1558.62" cy="468.27" r="3" />
        <circle className="cls-2" cx="1892.34" cy="324.88" r="3" />
      </g>
      <g id="mnt" data-name="mnt">
        <path
          id="main"
          data-name="main"
          className="cls-3"
          d="M650.17,319,480,608.36H789Z"
        />
        <path
          id="Vector_2"
          data-name="Vector 2"
          className="cls-4"
          d="M618.29,372.94,650.17,319l24.31,50.83-13.38-7.07L670,395l-20.51-32.23L633.45,388.2l6.25-30.53Z"
        />
        <path
          id="Intersect"
          className="cls-5"
          d="M480,607.35l221.28-.71L683.33,432.19l-43,37.81,15.28-65.74L650.17,319Z"
        />
      </g>
      <g id="mnt-2" data-name="mnt">
        <path
          id="main-2"
          data-name="main"
          className="cls-3"
          d="M813.64,216.17,632.24,608H961.63Z"
        />
        <path
          id="Vector_4"
          data-name="Vector 4"
          className="cls-4"
          d="M779.66,289.21l34-73L839.55,285l-14.26-9.57,9.51,43.64-21.87-43.64-17.11,34.45,6.66-41.34Z"
        />
        <path
          id="Intersect_2"
          data-name="Intersect 2"
          className="cls-5"
          d="M632.24,606.64l271.16.94L856,450.93H839.55L830,400l-27.38,19.38,11-203.19Z"
        />
      </g>
      <g id="mnt-3" data-name="mnt">
        <path
          id="main-3"
          data-name="main"
          className="cls-3"
          d="M963.49,350,830,608h242.41Z"
        />
        <path
          id="Vector_6"
          data-name="Vector 6"
          className="cls-4"
          d="M938.49,398.09l25-48.09,19.08,45.32-10.5-6.3,7,28.73L963,389l-12.6,22.68,4.9-27.22Z"
        />
        <path
          id="Intersect_3"
          data-name="Intersect 3"
          className="cls-5"
          d="M830,607.1H963.07l.42-257.1Z"
        />
      </g>
      <g id="mnt-4" data-name="mnt">
        <path
          id="main-4"
          data-name="main"
          className="cls-3"
          d="M1186.42,158,963,608h405.71Z"
        />
        <path
          id="Vector_8"
          data-name="Vector 8"
          className="cls-4"
          d="M1144.58,241.88,1186.42,158l31.92,79-17.56-11,11.7,50.12-26.93-50.12-21.06,39.57,8.19-47.48Z"
        />
        <path
          id="Intersect_4"
          data-name="Intersect 4"
          className="cls-5"
          d="M963,606.43h350.41l-60.45-209-39.73,27.23-8.15-90.32L1165.85,350l20.57-192Z"
        />
      </g>
      <g id="tree" data-name="tree">
        <path
          id="leaves"
          className="cls-6"
          d="M524.11,470l14.82,61.75H509.29Z"
        />
        <path
          id="Intersect_5"
          data-name="Intersect 5"
          className="cls-7"
          d="M524.11,471.1V532h-15l14.71-62Z"
        />
        <rect
          id="Rectangle_2"
          data-name="Rectangle 2"
          className="cls-8"
          x="520.9"
          y="532.02"
          width="6.42"
          height="9.62"
        />
      </g>
      <g id="hill_back" data-name="hill_back">
        <path
          id="main-5"
          data-name="main"
          className="cls-9"
          d="M368.43,607.71a67.17,67.17,0,0,1-8.43,0h8.43c16.06-.93,42.86-6.89,65.49-26.21,34.11-29.12,48.58-46,74.43-53.58s42.38-6.4,60.47,3.49,32,27.38,59.44,45.43c28.77,19,41.35,23.3,83.74,30.87Z"
        />
        <path
          className="cls-10"
          d="M535.74,523v84.68H368.43c16.06-.93,42.86-6.89,65.49-26.21,7.17-6.12,13.47-11.7,19.19-16.77,21.51-19,34.82-30.83,55.24-36.81C518.75,524.88,527.65,523.24,535.74,523Z"
        />
      </g>
      <path
        id="hill_dark_b"
        className="cls-11"
        d="M506.35,619.78a87,87,0,0,1-12.35,0h12.35c23.54-1.54,62.83-11.45,96-43.56,50-48.39,71.23-76.46,109.11-89s62.13-10.65,88.65,5.81,47,45.49,87.14,75.49C929.42,600,947.87,607.2,1010,619.78Z"
      />
      <g id="tree-2" data-name="tree">
        <path
          id="leaves-2"
          data-name="leaves"
          className="cls-6"
          d="M629.11,504l14.82,61.75H614.29Z"
        />
        <path
          id="Intersect_7"
          data-name="Intersect 7"
          className="cls-7"
          d="M629.11,505.1V566h-15l14.71-62Z"
        />
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          className="cls-8"
          x="625.9"
          y="566.02"
          width="6.42"
          height="9.62"
        />
      </g>
      <g id="hill_front" data-name="hill_front">
        <path
          id="main-6"
          data-name="main"
          className="cls-12"
          d="M410.15,607.72a68.65,68.65,0,0,1-8.15,0h8.15c15.54-.79,41.46-5.91,63.35-22.5,33-25,47-39.5,72-46s41-5.5,58.5,3,31,23.5,57.5,39c27.83,16.28,40,20,81,26.5Z"
        />
        <path
          className="cls-10"
          d="M572,535v72.7H410.15c15.54-.79,41.46-5.91,63.35-22.5,6.94-5.25,13-10,18.57-14.39,20.8-16.35,33.69-26.47,53.43-31.61C555.56,536.61,564.17,535.21,572,535Z"
        />
      </g>
      <path
        id="hill_dark_f"
        className="cls-13"
        d="M870.24,607.78a115.65,115.65,0,0,1-14.24,0h14.24c27.15-1.55,72.45-11.54,110.7-43.87,57.67-48.73,82.13-77,125.82-89.67s71.64-10.73,102.22,5.84,54.17,45.82,100.48,76c48.62,31.73,69.9,39,141.54,51.67Z"
      />
      <g id="Lighthouse">
        <path
          className="cls-14"
          d="M936.64,383.33V396h-23V383.33h23m0-3h-23a3,3,0,0,0-3,3V396a3,3,0,0,0,3,3h23a3,3,0,0,0,3-3V383.33a3,3,0,0,0-3-3Z"
        />
        <rect
          className="cls-14"
          x="912.11"
          y="397.45"
          width="26.03"
          height="8.55"
        />
        <path
          id="Rectangle_4"
          data-name="Rectangle 4"
          className="cls-4"
          d="M903.55,411.21h43.51l8.18,192.26H895Z"
        />
        <rect
          className="cls-3"
          x="897.23"
          y="406"
          width="55.78"
          height="5.21"
        />
        <rect
          className="cls-3"
          x="897.23"
          y="500.83"
          width="55.78"
          height="3.72"
        />
        <path className="cls-14" d="M925.31,365.47l24,17h-48Z" />
        <rect
          className="cls-14"
          x="919.54"
          y="581.53"
          width="11.16"
          height="21.94"
        />
        <rect
          className="cls-14"
          x="922.52"
          y="529.84"
          width="5.21"
          height="10.04"
        />
        <rect
          className="cls-14"
          x="922.52"
          y="448.4"
          width="5.21"
          height="10.04"
        />
        <polygon
          id="beam"
          data-name="beam"
          className="cls-15"
          points="1257.58 439.22 1220.76 547.06 934.6 394.48 937.85 384.94 1257.58 439.22"
        />
        <polygon
          id="beam-2"
          data-name="beam"
          className="cls-16"
          points="593.05 439.22 629.86 547.06 916.03 394.48 912.77 384.94 593.05 439.22"
        />
        <circle id="bulb" className="cls-17" cx="925.12" cy="389.64" r="5.11" />
        <circle
          id="glow"
          className="cls-18"
          cx="925.12"
          cy="389.64"
          r="18.05"
        />
      </g>
      <g id="hill_back-2" data-name="hill_back">
        <path
          id="main-7"
          data-name="main"
          className="cls-9"
          d="M1144.69,607.66a65.82,65.82,0,0,1-9.77,0h9.77c18.62-1.26,49.69-9.41,75.92-35.79,39.55-39.75,56.33-62.81,86.29-73.15S1356,490,1377,503.49s37.16,37.37,68.91,62c33.35,25.89,47.94,31.81,97.08,42.15Z"
        />
        <path
          className="cls-10"
          d="M1338.66,492V607.66h-194c18.62-1.26,49.69-9.41,75.92-35.78,8.32-8.36,15.63-16,22.26-22.9,24.93-26,40.37-42.1,64-50.26C1319,494.56,1329.28,492.33,1338.66,492Z"
        />
      </g>
      <g id="tree-3" data-name="tree">
        <path
          id="leaves-3"
          data-name="leaves"
          className="cls-6"
          d="M1293.33,457l16.75,69.78h-33.49Z"
        />
        <path
          id="Intersect_10"
          data-name="Intersect 10"
          className="cls-7"
          d="M1293.33,458.24v68.85h-16.91L1293,457Z"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          className="cls-8"
          x="1289.71"
          y="527.09"
          width="7.25"
          height="10.88"
        />
      </g>
      <g id="hill_front-2" data-name="hill_front">
        <path
          id="main-8"
          data-name="main"
          className="cls-12"
          d="M1116.25,607.68a73.45,73.45,0,0,1-9.77,0h9.77c18.62-1.08,49.69-8.08,75.92-30.72,39.55-34.13,56.33-53.93,86.29-62.81s49.14-7.51,70.11,4.1,37.16,32.09,68.91,53.25c33.35,22.22,47.94,27.31,97.08,36.18Z"
        />
        <path
          className="cls-10"
          d="M1310.22,508.41v99.27h-194c18.62-1.08,49.69-8.08,75.92-30.72,8.32-7.17,15.63-13.72,22.26-19.66,24.93-22.31,40.37-36.14,64-43.15C1290.52,510.58,1300.84,508.67,1310.22,508.41Z"
        />
      </g>
      <rect id="ground" className="cls-19" y="607" width="1920" height="122" />
      <path
        id="water"
        className="cls-20"
        d="M1127,607H728c70.17,19.8,95.39,65.43,128.65,85.59,39,23.63,104.65,12.68,153.9-7C1053.64,668.32,1087,625.52,1127,607Z"
      />
      <g id="cloud" data-name="cloud">
        <path
          id="dark"
          data-name="dark"
          className="cls-21"
          d="M622.91,243h27a20.5,20.5,0,0,1,20.5,20.5h0a20.5,20.5,0,0,1-20.5,20.5h-27a20.5,20.5,0,0,1-20.5-20.5h0A20.5,20.5,0,0,1,622.91,243Z"
        />
        <circle
          id="light"
          data-name="light"
          className="cls-2"
          cx="649.91"
          cy="254.51"
          r="29.5"
        />
        <path
          id="light-2"
          data-name="light"
          className="cls-2"
          d="M656.41,238h37a23,23,0,0,1,23,23h0a23,23,0,0,1-23,23h-37a23,23,0,0,1-23-23h0A23,23,0,0,1,656.41,238Z"
        />
      </g>
      <g id="cloud-2" data-name="cloud">
        <path
          id="dark-2"
          data-name="dark"
          className="cls-21"
          d="M1269.38,158.25h41a31.5,31.5,0,0,1,31.5,31.5h0a31.5,31.5,0,0,1-31.5,31.5h-41a31.5,31.5,0,0,1-31.5-31.5h0A31.5,31.5,0,0,1,1269.38,158.25Z"
        />
        <ellipse
          id="light-3"
          data-name="light"
          className="cls-2"
          cx="1310.38"
          cy="176.25"
          rx="45.5"
          ry="45"
        />
        <path
          id="light-4"
          data-name="light"
          className="cls-2"
          d="M1319.88,151.25h57a35,35,0,0,1,35,35h0a35,35,0,0,1-35,35h-57a35,35,0,0,1-35-35h0A35,35,0,0,1,1319.88,151.25Z"
        />
      </g>
      <g id="cloud-3" data-name="cloud">
        <path
          id="dark-3"
          data-name="dark"
          className="cls-21"
          d="M910,228h42a33,33,0,0,1,33,33h0a33,33,0,0,1-33,33H910a33,33,0,0,1-33-33h0A33,33,0,0,1,910,228Z"
        />
        <circle
          id="light-5"
          data-name="light"
          className="cls-2"
          cx="954"
          cy="246"
          r="48"
        />
        <path
          id="light-6"
          data-name="light"
          className="cls-2"
          d="M964,220h59a37,37,0,0,1,37,37h0a37,37,0,0,1-37,37H964a37,37,0,0,1-37-37h0A37,37,0,0,1,964,220Z"
        />
      </g>
      <g id="tree-4" data-name="tree">
        <path
          id="leaves-4"
          data-name="leaves"
          className="cls-6"
          d="M504.11,524l14.82,61.75H489.29Z"
        />
        <path
          id="Intersect_12"
          data-name="Intersect 12"
          className="cls-7"
          d="M504.11,525.1V586h-15l14.71-62Z"
        />
        <rect
          id="Rectangle_7"
          data-name="Rectangle 7"
          className="cls-8"
          x="500.9"
          y="586.02"
          width="6.42"
          height="9.62"
        />
      </g>
      <g id="tree-5" data-name="tree">
        <path
          id="leaves-5"
          data-name="leaves"
          className="cls-6"
          d="M444.11,514l14.82,61.75H429.29Z"
        />
        <path
          id="Intersect_13"
          data-name="Intersect 13"
          className="cls-7"
          d="M444.11,515.1V576h-15l14.71-62Z"
        />
        <rect
          id="Rectangle_8"
          data-name="Rectangle 8"
          className="cls-8"
          x="440.9"
          y="576.02"
          width="6.42"
          height="9.62"
        />
      </g>
      <g id="tree-6" data-name="tree">
        <path
          id="leaves-6"
          data-name="leaves"
          className="cls-6"
          d="M663.11,530l14.82,61.75H648.29Z"
        />
        <path
          id="Intersect_14"
          data-name="Intersect 14"
          className="cls-7"
          d="M663.11,531.1V592h-15l14.71-62Z"
        />
        <rect
          id="Rectangle_9"
          data-name="Rectangle 9"
          className="cls-8"
          x="659.9"
          y="592.02"
          width="6.42"
          height="9.62"
        />
      </g>
      <g id="tree-7" data-name="tree">
        <path
          id="leaves-7"
          data-name="leaves"
          className="cls-6"
          d="M579.11,499l14.82,61.75H564.29Z"
        />
        <path
          id="Intersect_15"
          data-name="Intersect 15"
          className="cls-7"
          d="M579.11,500.1V561h-15l14.71-62Z"
        />
        <rect
          id="Rectangle_10"
          data-name="Rectangle 10"
          className="cls-8"
          x="575.9"
          y="561.02"
          width="6.42"
          height="9.62"
        />
      </g>
      <g id="tree-8" data-name="tree">
        <path
          id="leaves-8"
          data-name="leaves"
          className="cls-6"
          d="M1249.33,492l16.75,69.78h-33.49Z"
        />
        <path
          id="Intersect_16"
          data-name="Intersect 16"
          className="cls-7"
          d="M1249.33,493.24v68.85h-16.91L1249,492Z"
        />
        <rect
          id="Rectangle_11"
          data-name="Rectangle 11"
          className="cls-8"
          x="1245.71"
          y="562.09"
          width="7.25"
          height="10.88"
        />
      </g>
      <g id="tree-9" data-name="tree">
        <path
          id="leaves-9"
          data-name="leaves"
          className="cls-6"
          d="M1188.33,521l16.75,69.78h-33.49Z"
        />
        <path
          id="Intersect_17"
          data-name="Intersect 17"
          className="cls-7"
          d="M1188.33,522.24v68.85h-16.91L1188,521Z"
        />
        <rect
          id="Rectangle_12"
          data-name="Rectangle 12"
          className="cls-8"
          x="1184.71"
          y="591.09"
          width="7.25"
          height="10.88"
        />
      </g>
      <g id="tree-10" data-name="tree">
        <path
          id="leaves-10"
          data-name="leaves"
          className="cls-6"
          d="M1453.33,502l16.75,69.78h-33.49Z"
        />
        <path
          id="Intersect_18"
          data-name="Intersect 18"
          className="cls-7"
          d="M1453.33,503.24v68.85h-16.91L1453,502Z"
        />
        <rect
          id="Rectangle_13"
          data-name="Rectangle 13"
          className="cls-8"
          x="1449.71"
          y="572.09"
          width="7.25"
          height="10.88"
        />
      </g>
      <g id="tree-11" data-name="tree">
        <path
          id="leaves-11"
          data-name="leaves"
          className="cls-6"
          d="M1372.33,440l16.75,69.78h-33.49Z"
        />
        <path
          id="Intersect_19"
          data-name="Intersect 19"
          className="cls-7"
          d="M1372.33,441.24v68.84h-16.91L1372,440Z"
        />
        <rect
          id="Rectangle_14"
          data-name="Rectangle 14"
          className="cls-8"
          x="1368.71"
          y="510.08"
          width="7.25"
          height="10.88"
        />
      </g>
      <g id="tree-12" data-name="tree">
        <path
          id="leaves-12"
          data-name="leaves"
          className="cls-6"
          d="M1333.33,515l16.75,69.78h-33.49Z"
        />
        <path
          id="Intersect_20"
          data-name="Intersect 20"
          className="cls-7"
          d="M1333.33,516.24v68.85h-16.91L1333,515Z"
        />
        <rect
          id="Rectangle_15"
          data-name="Rectangle 15"
          className="cls-8"
          x="1329.71"
          y="585.09"
          width="7.25"
          height="10.88"
        />
      </g>
      <g id="boat" data-name="boat">
        <path
          id="Polygon_22"
          data-name="Polygon 22"
          className="cls-4"
          d="M1029.4,543.81,1063.52,598H995.28Z"
        />
        <rect
          className="cls-22"
          x="1028.72"
          y="533"
          width="1.5"
          height="67.39"
        />
        <path
          id="Rectangle_17"
          data-name="Rectangle 17"
          className="cls-23"
          d="M990.15,599.34h78.65l-4.65,8.25h-69Z"
        />
        <path className="cls-24" d="M1042.08,537.5l-11.26,3.9v-7.8Z" />
      </g>
      <g id="boat-2" data-name="boat">
        <path
          id="Polygon_21"
          data-name="Polygon 21"
          className="cls-4"
          d="M816.12,518.84,863,593.21H769.25Z"
        />
        <rect
          className="cls-22"
          x="815.18"
          y="504"
          width="2.06"
          height="92.56"
        />
        <path
          id="Rectangle_16"
          data-name="Rectangle 16"
          className="cls-23"
          d="M762.21,595.12h108l-6.38,11.34H769.13Z"
        />
        <path className="cls-24" d="M833.53,510.19l-15.46,5.35V504.83Z" />
      </g>
      <g id="Balloon" data-name="Balloon">
        <polyline
          className="cls-25"
          points="543.65 410.22 540.09 428.51 519.21 410.22 522.93 428.51 543.65 410.22"
        />
        <polygon
          className="cls-26"
          points="531.43 426.4 544.14 410.22 518.73 410.22 531.43 426.4"
        />
        <path
          className="cls-2"
          d="M507.07,368.87c0-17.39,10.91-25.33,24.36-25.33-17.38,0-31.48,7.94-31.48,25.33,0,9.86,10.14,27.73,18.91,41.35h2.84C514.92,396.6,507.07,378.73,507.07,368.87Z"
        />
        <path
          className="cls-2"
          d="M555.79,368.87c0,9.86-7.84,27.73-14.63,41.35H544c8.77-13.62,18.9-31.49,18.9-41.35,0-17.39-14.09-25.33-31.48-25.33C544.88,343.54,555.79,351.48,555.79,368.87Z"
        />
        <path
          className="cls-27"
          d="M507.07,368.87c0,9.86,7.85,27.73,14.63,41.35h3.94c-4-13.62-8.69-31.49-8.69-41.35,0-17.39,6.48-25.33,14.48-25.33C518,343.54,507.07,351.48,507.07,368.87Z"
        />
        <path
          className="cls-27"
          d="M545.92,368.87c0,9.86-4.67,27.73-8.7,41.35h3.94c6.79-13.62,14.63-31.49,14.63-41.35,0-17.39-10.91-25.33-24.36-25.33C539.43,343.54,545.92,351.48,545.92,368.87Z"
        />
        <path
          className="cls-2"
          d="M517,368.87c0,9.86,4.66,27.73,8.69,41.35h3.63c-1.51-13.62-3.26-31.49-3.26-41.35,0-17.39,2.43-25.33,5.42-25.33C523.43,343.54,517,351.48,517,368.87Z"
        />
        <path
          className="cls-2"
          d="M536.85,368.87c0,9.86-1.74,27.73-3.25,41.35h3.62c4-13.62,8.7-31.49,8.7-41.35,0-17.39-6.49-25.33-14.49-25.33C534.43,343.54,536.85,351.48,536.85,368.87Z"
        />
        <path
          className="cls-27"
          d="M526,368.87c0,9.86,1.75,27.73,3.26,41.35h4.33c1.51-13.62,3.25-31.49,3.25-41.35,0-17.39-2.42-25.33-5.42-25.33S526,351.48,526,368.87Z"
        />
        <polygon
          className="cls-23"
          points="539.93 440.65 523.1 440.65 522.61 428.51 540.41 428.51 539.93 440.65"
        />
      </g>
      <g id="Balloon-2" data-name="Balloon">
        <polyline
          className="cls-28"
          points="1331.21 307.44 1328.03 323.74 1309.42 307.44 1312.74 323.74 1331.21 307.44"
        />
        <polygon
          className="cls-26"
          points="1320.32 321.86 1331.64 307.44 1308.99 307.44 1320.32 321.86"
        />
        <path
          className="cls-2"
          d="M1298.6,270.58c0-15.5,9.72-22.58,21.72-22.58-15.5,0-28.06,7.08-28.06,22.58,0,8.79,9,24.72,16.85,36.86h2.53C1305.59,295.3,1298.6,279.37,1298.6,270.58Z"
        />
        <path
          className="cls-2"
          d="M1342,270.58c0,8.79-7,24.72-13,36.86h2.54c7.81-12.14,16.85-28.07,16.85-36.86,0-15.5-12.57-22.58-28.06-22.58C1332.31,248,1342,255.08,1342,270.58Z"
        />
        <path
          className="cls-27"
          d="M1298.6,270.58c0,8.79,7,24.72,13,36.86h3.52c-3.6-12.14-7.76-28.07-7.76-36.86,0-15.5,5.78-22.58,12.92-22.58C1308.32,248,1298.6,255.08,1298.6,270.58Z"
        />
        <path
          className="cls-27"
          d="M1333.23,270.58c0,8.79-4.16,24.72-7.76,36.86H1329c6-12.14,13-28.07,13-36.86,0-15.5-9.72-22.58-21.71-22.58C1327.45,248,1333.23,255.08,1333.23,270.58Z"
        />
        <path
          className="cls-2"
          d="M1307.4,270.58c0,8.79,4.16,24.72,7.76,36.86h3.22c-1.34-12.14-2.9-28.07-2.9-36.86,0-15.5,2.17-22.58,4.84-22.58C1313.18,248,1307.4,255.08,1307.4,270.58Z"
        />
        <path
          className="cls-2"
          d="M1325.15,270.58c0,8.79-1.56,24.72-2.9,36.86h3.22c3.6-12.14,7.76-28.07,7.76-36.86,0-15.5-5.78-22.58-12.91-22.58C1323,248,1325.15,255.08,1325.15,270.58Z"
        />
        <path
          className="cls-27"
          d="M1315.48,270.58c0,8.79,1.56,24.72,2.9,36.86h3.87c1.34-12.14,2.9-28.07,2.9-36.86,0-15.5-2.17-22.58-4.83-22.58S1315.48,255.08,1315.48,270.58Z"
        />
        <polygon
          className="cls-23"
          points="1327.89 334.56 1312.89 334.56 1312.45 323.74 1328.32 323.74 1327.89 334.56"
        />
      </g>
      <g id="fish">
        <polygon
          className="cls-29"
          points="1003.56 653.82 1009.49 657.06 1009.49 650.58 1003.56 653.82"
        />
        <polygon
          className="cls-29"
          points="1003.25 663.49 1009.18 666.73 1009.18 660.25 1003.25 663.49"
        />
        <path
          className="cls-30"
          d="M1036.54,658.82s-17.06,5.22-29.31,5.22-15.05-5.22-15.05-5.22,2.8-5.21,15.05-5.21S1036.54,658.82,1036.54,658.82Z"
        />
        <polygon
          className="cls-29"
          points="1036.54 658.82 1042.47 662.07 1042.47 655.58 1036.54 658.82"
        />
        <circle className="cls-4" cx="997.52" cy="657.79" r="1.04" />
        <line
          className="cls-4"
          x1="992.18"
          y1="658.82"
          x2="994.59"
          y2="658.96"
        />
        <polygon
          className="cls-29"
          points="1003.79 660.35 1000.64 659.44 1000.64 657.45 1003.79 656.53 1003.79 660.35"
        />
      </g>
      <g id="fish-2" data-name="fish">
        <polygon
          className="cls-29"
          points="865.48 631.85 859.55 635.09 859.55 628.61 865.48 631.85"
        />
        <polygon
          className="cls-29"
          points="865.8 641.51 859.87 644.75 859.87 638.27 865.8 641.51"
        />
        <path
          className="cls-30"
          d="M832.51,636.85s17,5.22,29.3,5.22,15.06-5.22,15.06-5.22-2.81-5.22-15.06-5.22S832.51,636.85,832.51,636.85Z"
        />
        <polygon
          className="cls-29"
          points="832.51 636.85 826.58 640.09 826.58 633.61 832.51 636.85"
        />
        <circle className="cls-4" cx="871.52" cy="635.81" r="1.04" />
        <line
          className="cls-4"
          x1="876.87"
          y1="636.85"
          x2="874.46"
          y2="636.99"
        />
        <polygon
          className="cls-29"
          points="865.25 638.38 868.4 637.46 868.4 635.47 865.25 634.55 865.25 638.38"
        />
      </g>
      <g id="fish-3" data-name="fish">
        <polygon
          className="cls-29"
          points="962.29 631.83 969.68 635.88 969.68 627.79 962.29 631.83"
        />
        <polygon
          className="cls-29"
          points="961.89 643.89 969.29 647.93 969.29 639.85 961.89 643.89"
        />
        <path
          className="cls-30"
          d="M1003.41,638.07s-21.27,6.51-36.54,6.51-18.78-6.51-18.78-6.51,3.5-6.51,18.78-6.51S1003.41,638.07,1003.41,638.07Z"
        />
        <polygon
          className="cls-29"
          points="1003.41 638.07 1010.81 642.11 1010.81 634.03 1003.41 638.07"
        />
        <circle className="cls-4" cx="954.76" cy="636.78" r="1.29" />
        <line
          className="cls-4"
          x1="948.09"
          y1="638.07"
          x2="951.1"
          y2="638.24"
        />
        <polygon
          className="cls-29"
          points="962.58 639.98 958.65 638.84 958.65 636.35 962.58 635.21 962.58 639.98"
        />
      </g>
      <g id="plane">
        <polygon
          className="cls-30"
          points="520.51 233.93 510.14 230.32 459.23 256.36 470.8 273.11 520.51 233.93"
        />
        <path
          className="cls-4"
          d="M565.17,232.44H551.62l-16.37,20.2H439.9l-19.44,17.24c-3.51,3.47-3.29,5.66,2.17,6h40.21l57.67,34.39,12.59-2.56-38.79-31.83h48Z"
        />
        <polygon
          className="cls-31"
          points="438.25 254.11 429.47 261.89 438.25 261.89 438.25 254.11"
        />
        <rect
          className="cls-30"
          x="448.59"
          y="257.03"
          width="6.29"
          height="4.86"
        />
        <rect
          className="cls-30"
          x="459.95"
          y="257.03"
          width="6.29"
          height="4.86"
        />
        <rect
          className="cls-30"
          x="471.3"
          y="257.03"
          width="6.29"
          height="4.86"
        />
        <rect
          className="cls-30"
          x="482.66"
          y="257.03"
          width="6.29"
          height="4.86"
        />
        <rect
          className="cls-30"
          x="494.02"
          y="257.03"
          width="6.29"
          height="4.86"
        />
        <rect
          className="cls-30"
          x="505.38"
          y="257.03"
          width="6.29"
          height="4.86"
        />
        <path
          className="cls-30"
          d="M546.3,272.5c0-3.1-9.56-5.63-21.54-5.75,1.38.1,2.49,2.64,2.49,5.75s-1.11,5.64-2.49,5.74C536.74,278.12,546.3,275.6,546.3,272.5Z"
        />
        <path
          className="cls-31"
          d="M527.25,272.5c0-3.11-1.11-5.65-2.49-5.75h-.2a1.59,1.59,0,0,0-.51.16c-1.12.62-1.95,2.89-1.95,5.59s.83,5,1.95,5.58a1.38,1.38,0,0,0,.51.16h.2C526.14,278.14,527.25,275.61,527.25,272.5Z"
        />
      </g>
      <path
        id="moon"
        className="cls-32"
        d="M494.43,119.5a42.5,42.5,0,0,1,26.46-39.35c-1.12-.09-2.25-.15-3.39-.15a39.5,39.5,0,0,0,0,79c1.14,0,2.27-.06,3.39-.15A42.5,42.5,0,0,1,494.43,119.5Z"
      />
      <g id="sun">
        <circle
          id="Ellipse"
          className="cls-32"
          cx="517.5"
          cy="119.5"
          r="39.5"
        />
        <path
          id="Polygon_4"
          data-name="Polygon 4"
          className="cls-32"
          d="M517.5,41.94l3.9,33.56h-7.8Z"
        />
        <path
          id="Polygon_5"
          data-name="Polygon 5"
          className="cls-32"
          d="M517.5,197.06l-3.9-33.56h7.8Z"
        />
        <path
          id="Polygon_6"
          data-name="Polygon 6"
          className="cls-32"
          d="M595.06,119.5l-33.56,3.9v-7.8Z"
        />
        <path
          id="Polygon_7"
          data-name="Polygon 7"
          className="cls-32"
          d="M439.94,119.5l33.56-3.9v7.8Z"
        />
        <path
          id="Polygon_8"
          data-name="Polygon 8"
          className="cls-32"
          d="M574.25,62.75l-20.88,28.1-7.22-7.22Z"
        />
        <path
          id="Polygon_9"
          data-name="Polygon 9"
          className="cls-32"
          d="M460.75,176.25l20.88-28.1,7.22,7.22Z"
        />
        <path
          id="Polygon_10"
          data-name="Polygon 10"
          className="cls-32"
          d="M574.25,176.25l-28.1-20.88,7.22-7.22Z"
        />
        <path
          id="Polygon_11"
          data-name="Polygon 11"
          className="cls-32"
          d="M460.75,62.75l28.1,20.88-7.22,7.22Z"
        />
        <path
          id="Polygon_4-2"
          data-name="Polygon 4"
          className="cls-32"
          d="M548.47,48.39l-9.83,32.33-7.15-3.12Z"
        />
        <path
          id="Polygon_5-2"
          data-name="Polygon 5"
          className="cls-32"
          d="M486.53,190.61l9.83-32.33,7.15,3.12Z"
        />
        <path
          id="Polygon_6-2"
          data-name="Polygon 6"
          className="cls-32"
          d="M588.61,150.47l-32.33-9.83,3.12-7.15Z"
        />
        <path
          id="Polygon_7-2"
          data-name="Polygon 7"
          className="cls-32"
          d="M446.39,88.53l32.33,9.83-3.12,7.15Z"
        />
        <path
          id="Polygon_8-2"
          data-name="Polygon 8"
          className="cls-32"
          d="M592.19,90.13l-30.36,17.42-3.74-9.5Z"
        />
        <path
          id="Polygon_9-2"
          data-name="Polygon 9"
          className="cls-32"
          d="M442.81,148.87l30.36-17.42,3.74,9.5Z"
        />
        <path
          id="Polygon_10-2"
          data-name="Polygon 10"
          className="cls-32"
          d="M546.87,194.19l-17.42-30.36,9.5-3.74Z"
        />
        <path
          id="Polygon_11-2"
          data-name="Polygon 11"
          className="cls-32"
          d="M488.13,44.81l17.42,30.36-9.5,3.74Z"
        />
      </g>
      <circle
        id="glow-2"
        data-name="glow"
        className="cls-33"
        cx="518.92"
        cy="119.89"
        r="172.37"
      />
    </svg>
  </DayNightLandscape>
);
