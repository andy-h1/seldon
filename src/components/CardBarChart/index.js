import React from 'react';
import { string, number } from 'prop-types';
import { BarChart } from '../BarChart';
import * as S from './styles';

export const CardBarChart = ({ statistic, title }) => {
  return (
    <S.CardWrapper>
      <S.TitleWrapper>
        <S.Text>{statistic}</S.Text>
        <S.Title>{title}</S.Title>
      </S.TitleWrapper>

      <BarChart />
    </S.CardWrapper>
  );
};

CardBarChart.propTypes = {
  title: string.isRequired,
  statistic: number.isRequired,
};
