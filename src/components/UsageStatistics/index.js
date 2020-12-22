import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
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
      <Grid container xs={12}>
        <Grid item xs={10}>
          <Typography variant="h5">Usage Statistics</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained">Upgrade Account</Button>
        </Grid>
      </Grid>
      <S.DonutWrapper>
        {data.map((item) => {
          return <UsageDonut data={item} key={item.name} />;
        })}
      </S.DonutWrapper>
    </div>
  );
};
