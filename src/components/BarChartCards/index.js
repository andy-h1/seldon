import React from 'react';
import { CardBarChart } from '../CardBarChart';
import { BarChartData } from './data';
import * as S from './styles';

export const BarChartCards = () => {
  return (
    <S.Wrapper>
      {BarChartData.map((item) => {
        return <CardBarChart title={item.title} statistic={item.statistic} key={item.title} />;
      })}
    </S.Wrapper>
  );
};
