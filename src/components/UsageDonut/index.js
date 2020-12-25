/* eslint-disable react/prop-types */
import React from 'react';
import { Typography } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import * as S from './styles';

const animate = (props) => keyframes`
0% {
  stroke-dashoffset: ${props.perimeter};
}
100% {
  stroke-dashoffset: ${props.perimeterGap};
}
`;

const Text = styled.text`
  dominant-baseline: middle;
  text-anchor: middle;
  fill: url(#donutFill);
`;

const Circle = styled.circle`
  animation: ${animate} 1.5s;
  fill: transparent;
  stroke: url(#donutFill);
  stroke-dasharray: ${({ perimeter }) => perimeter};
  stroke-dashoffset: ${(props) => props.perimeterGap};
  stroke-linecap: round;
  stroke-width: 5;
`;

export const UsageDonut = ({ data }) => {
  const { name, usage, total, color } = data;
  const radius = 45;
  const percentage = usage / total;
  const perimeter = 2 * Math.PI * radius;
  const perimeterGap = perimeter - perimeter * percentage;

  return (
    <S.SVGWrapper>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <S.FullCircle cx={50} cy={50} r={radius} transform="rotate (-90 50 50)" />
        <Circle
          color={color}
          cx={50}
          cy={50}
          r={radius}
          perimeter={perimeter}
          perimeterGap={perimeterGap}
          transform="rotate (-90 50 50)"
        />
        <Text x="50%" y="50%">
          {usage}
        </Text>

        <defs>
          <linearGradient id="donutFill">
            <stop offset="0%" stopColor="#83f9b0" />
            <stop offset="100%" stopColor="#cbf07d" />
          </linearGradient>
        </defs>
      </svg>

      <Typography component="p">{name} used</Typography>
      <Typography component="p">
        {total - usage}/{total} left
      </Typography>
    </S.SVGWrapper>
  );
};
