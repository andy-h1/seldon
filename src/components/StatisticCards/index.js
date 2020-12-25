import React from 'react';
import { CardStatistics } from '../CardStatistics';
import { StatisticsData } from './data';
import * as S from './styles';

export const StatisticCards = () => {
  return (
    <S.Wrapper>
      {StatisticsData.map((item) => {
        return <CardStatistics title={item.title} statistic={item.statistic} key={item.title} />;
      })}
    </S.Wrapper>
  );
};
