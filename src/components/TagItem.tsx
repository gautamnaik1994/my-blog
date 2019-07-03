import React, { Fragment } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { transparentize, lighten, desaturate } from 'polished';
import Link from './Link';
import compose from '../utils/compose';

const boxShadow = theme('mode', {
  light: (props: any) =>
    `0 3px 6px 0px ${transparentize(0.6, props.theme.primary)}`,
});

const tone = compose(
  desaturate(0.2),
  lighten(0.1),
);

const textColor = theme('mode', {
  dark: (props: any) => tone(props.theme.primary),
});

interface Props {
  name: string;
}

const TagItem = styled(Link)`
  padding: 5px 8px;
  background: ${props => transparentize(0.6, props.theme.primary)};
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.015rem;
  box-shadow: ${boxShadow};
  color: ${textColor};
  & + & {
    margin-left: 5px;
  }
`;

export default ({ name }: Props) => (
  <TagItem to={`/tags/${name}`}>{name}</TagItem>
);
