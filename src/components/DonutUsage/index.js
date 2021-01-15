import React from 'react';
import { shape, string, number } from 'prop-types';
import { Typography } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import * as S from './styles';
import { colours } from '../../tokens';

const animate = (props) => keyframes`
0% {
  stroke-dashoffset: ${props.circumference};
}
100% {
  stroke-dashoffset: ${props.circumferenceGap};
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
  stroke-dasharray: ${({ circumference }) => circumference};
  stroke-dashoffset: ${(props) => props.circumferenceGap};
  stroke-linecap: round;
  stroke-width: 5;
`;

export const FullCircle = styled.circle`
  fill: transparent;
  stroke-width: 5;
  stroke: ${colours.lightGrey};
`;

export const DonutUsage = ({ data }) => {
  const { name, usage, total, color } = data;
  const radius = 45;
  const percentage = usage / total;
  const circumference = 2 * Math.PI * radius;
  const circumferenceGap = circumference - circumference * percentage;

  return (
    <S.SVGWrapper>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <FullCircle cx={50} cy={50} r={radius} transform="rotate (-90 50 50)" />
        <Circle
          color={color}
          cx={50}
          cy={50}
          r={radius}
          circumference={circumference}
          circumferenceGap={circumferenceGap}
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

DonutUsage.propTypes = {
  data: shape({
    name: string.isRequired,
    usage: number.isRequired,
    total: number.isRequired,
    color: string.isRequired,
  }).isRequired,
};
