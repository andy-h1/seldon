import React from 'react';
import { UsageDonut } from '../UsageDonut';
import * as S from './styles';

const data = [
  {
    name: 'Components',
    usage: 895,
    total: 1000,
    color: 'red',
  },
  {
    name: 'Templates',
    usage: 284,
    total: 500,
    color: 'blue',
  },
  {
    name: 'Pages',
    usage: 23,
    total: 100,
    color: 'green',
  },
  {
    name: 'Projects',
    usage: 1,
    total: 2,
    color: 'pink',
  },
  {
    name: 'Team Members',
    usage: 8,
    total: 10,
    color: 'purple',
  },
];

export const UsageStatistics = () => {
  return (
    <div>
      <h3>Usage Statistics</h3>
      <S.DonutWrapper>
        {data.map((item) => {
          return <UsageDonut data={item} key={item.name} />;
        })}
      </S.DonutWrapper>
    </div>
  );
};
