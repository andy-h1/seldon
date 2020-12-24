import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { UsageDonut } from '../UsageDonut';
import { UsageStatisticsData } from './data';
import * as S from './styles';

export const UsageStatistics = () => {
  const classes = S.useStyles();
  return (
    <div>
      <S.TitleWrapper>
        <Typography component="div" variant="h5">
          Usage Statistics
        </Typography>
        <Button variant="contained" className={classes.button}>
          Upgrade Account
        </Button>
      </S.TitleWrapper>

      <S.DonutWrapper>
        {UsageStatisticsData.map((item) => {
          return <UsageDonut data={item} key={item.name} />;
        })}
      </S.DonutWrapper>
    </div>
  );
};
