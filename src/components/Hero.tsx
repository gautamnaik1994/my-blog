import React, { Fragment, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import media from '../utils/MediaQueries';
import Logo from './Logo';

const bgAnim = keyframes`
    0%{
        transform:translateX(0);
    }
    100%{
        transform:translateX(-2180px);
    }

`;

const StyledLogo = styled(Logo)`
  background-color: white;
  box-shadow: 0 0 7px 0px #8b8b8b;
  padding: 8px 14px;
  width: 16px;
  border-radius: 8px;
  box-sizing: content-box;
  ${media.tablet} {
    width: 21px;
    padding: 10px 18px;
    border-radius: 11px;
  }
`;

interface NameProps {
  marginLeft: number;
}

const Name = styled.div<NameProps>`
  padding: 8px 9px;
  border-radius: 5px;
  font-size: 21px;
  color: white;
  font-weight: bold;
  line-height: 23px;
  transition: margin-left 1s cubic-bezier(0.43, 1.01, 0.57, 1.18) 0.5s;
  font-family: 'Merriweather', serif;
  position: relative;
  z-index: -1;
  margin-left: ${props => props.marginLeft}px;

  ${media.tablet} {
    font-size: 33px;
    line-height: 32px;
  }
`;

interface HeroProps {
  showHero: boolean;
}

const Hero = styled.header<HeroProps>`
  position: relative;
  height: ${props => (props.showHero ? 30 : 0)}vh;
  background: rgba(0, 132, 255, 1);
  background-image: linear-gradient(
    243.4deg,
    rgba(0, 215, 206, 1) 13%,
    rgba(0, 132, 255, 1) 98%
  );
  overflow: hidden;
  .inner-container {
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    > * {
      display: inline-block;
      vertical-align: middle;
    }
  }

  .img-bg {
    background-position: center;
    background-size: 14%;
    position: absolute;
    left: 0;
    width: 6540px;
    top: 0;
    bottom: 0;
    background-image: url('abstractbgRings.svg');
    animation: ${bgAnim} 350s infinite linear;
    ${media.tablet} {
      height: auto;
    }
  }
  ${media.tablet} {
    height: ${props => (props.showHero ? 50 : 0)}vh;
  }
  .img-bg-2 {
    background-image: url('abstractbgOther.svg');
    animation: ${bgAnim} 250s infinite linear;
  }
`;

interface Props {
  title: string;
  showHero: boolean;
}

export default ({ title, showHero }: Props) => {
  const [marginLeft, setMarginLeft] = useState<number>(-200);
  useEffect(() => {
    setMarginLeft(0);
  }, []);
  return (
    <Hero showHero={showHero}>
      <div className="img-bg"></div>
      <div className="img-bg img-bg-2"></div>
      <div className="inner-container">
        <StyledLogo />
        <Name marginLeft={marginLeft}>
          Gautam
          <br />
          Blogs
        </Name>
      </div>
    </Hero>
  );
};
