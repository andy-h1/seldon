import React from 'react';
import { CardStatistics } from '../CardStatistics';
import { StatisticsData } from './data';
import * as S from './styles';

export const Statistics = () => {
  return (
    <S.Wrapper>
      {StatisticsData.map((item) => {
        return <CardStatistics title={item.title} statistic={item.statistic} key={item.name} />;
      })}
    </S.Wrapper>
  );
};
