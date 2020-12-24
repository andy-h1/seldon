/* eslint-disable react/prop-types */
import React from 'react';
import { Typography } from '@material-ui/core';
import * as S from './styles';

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
        <S.Circle
          color={color}
          cx={50}
          cy={50}
          r={radius}
          perimeter={perimeter}
          perimeterGap={perimeterGap}
          transform="rotate (-90 50 50)"
        />

        <S.Text x="50%" y="50%">
          {usage}
        </S.Text>
      </svg>
      <Typography>{name} used</Typography>
      <Typography>
        {total - usage}/{total} left
      </Typography>
    </S.SVGWrapper>
  );
};
