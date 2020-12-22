import React from 'react';
import { shape, string, number } from 'prop-types';
import * as S from './styles';

export const CardStatistics = ({ data }) => {
  const { statistics, title } = data;
  return (
    <S.CardWrapper>
      <S.Title>{title}</S.Title>
      <S.Statistics>{statistics}</S.Statistics>
    </S.CardWrapper>
  );
};

CardStatistics.propTypes = {
  data: shape({
    title: string,
    statistics: number,
  }).isRequired,
};
