/* eslint-disable react/prop-types */
import React from 'react';
import { BarChart } from '../BarChart';
import * as S from './styles';

export const CardHighlight = ({ data }) => {
  const { statistics, title } = data;
  return (
    <S.CardWrapper>
      <p>{statistics}</p>
      <p>{title}</p>
      <BarChart />
    </S.CardWrapper>
  );
};
