import styled from 'styled-components';
import theme from 'styled-theming';
import { invert } from 'polished';

const color = theme('mode', {
  light: '#333',
  dark: invert('#333'),
});

export default styled.p`
  font-family: 'Merriweather', serif;
  text-align: left;
  font-size: 16px;
  line-height: 1.58;
  letter-spacing: -0.003em;
  color: ${color};
`;
