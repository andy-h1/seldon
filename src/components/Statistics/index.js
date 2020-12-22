import React from 'react';
import { CardStatistics } from '../CardStatistics';
import * as S from './styles';

const data = [
  {
    title: 'Played',
    statistic: 1254,
  },
  {
    title: 'Finished',
    statistic: 809,
  },
  {
    title: 'Likes',
    statistic: 114,
  },
  {
    title: 'Comments',
    statistic: 27,
  },
];

// add data into args
export const Statistics = () => {
  return (
    <S.Wrapper>
      {data.map((item) => {
        return <CardStatistics data={item} key={item.name} />;
      })}
    </S.Wrapper>
  );
};
