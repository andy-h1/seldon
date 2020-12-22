/* eslint-disable react/prop-types */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Typography } from '@material-ui/core';

const animate = (props) => keyframes`
  0% {
    stroke-dashoffset: ${props.perimeter};
  }
  100% {
    stroke-dashoffset: ${props.perimeterGap};
  }
`;

const Circle = styled.circle`
  animation: ${animate} 1.5s;
  fill: transparent;
  stroke: ${({ color }) => color};
  stroke-dasharray: ${({ perimeter }) => perimeter};
  stroke-dashoffset: ${(props) => props.perimeterGap};
  stroke-linecap: round;
  stroke-width: 5;
`;

const Text = styled.text`
  dominant-baseline: middle;
  text-anchor: middle;
  fill: white;
`;

const SVGWrapper = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
`;

export const UsageDonut = ({ data }) => {
  const { name, usage, total, color } = data;
  const radius = 45;
  const percentage = usage / total;
  const perimeter = 2 * Math.PI * radius;
  const perimeterGap = perimeter - perimeter * percentage;
  return (
    <SVGWrapper>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
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
      </svg>
      <Typography>{name} used</Typography>
      <Typography>
        {total - usage}/{total} left
      </Typography>
    </SVGWrapper>
  );
};
