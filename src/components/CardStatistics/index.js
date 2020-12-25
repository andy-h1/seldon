import React from 'react';
import { string, number } from 'prop-types';
import * as S from './styles';

export const CardStatistics = ({ title, statistic }) => {
  return (
    <S.CardWrapper>
      <S.Title>{title}</S.Title>
      <S.Statistics>{statistic}</S.Statistics>
    </S.CardWrapper>
  );
};

CardStatistics.propTypes = {
  title: string.isRequired,
  statistic: number.isRequired,
};
