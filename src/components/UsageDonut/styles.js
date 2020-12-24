import styled, { keyframes } from 'styled-components';
import { colours } from '../../tokens';

const animate = (props) => keyframes`
  0% {
    stroke-dashoffset: ${props.perimeter};
  }
  100% {
    stroke-dashoffset: ${props.perimeterGap};
  }
`;

export const Circle = styled.circle`
  animation: ${animate} 1.5s;
  fill: transparent;
  stroke: ${({ color }) => color};
  stroke-dasharray: ${({ perimeter }) => perimeter};
  stroke-dashoffset: ${(props) => props.perimeterGap};
  stroke-linecap: round;
  stroke-width: 5;
`;

export const FullCircle = styled.circle`
  fill: transparent;
  stroke-width: 5;
  stroke: ${colours.lightGrey};
`;

export const Text = styled.text`
  dominant-baseline: middle;
  text-anchor: middle;
  fill: ${colours.white};
`;

export const SVGWrapper = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
`;
