import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { DonutUsage } from '../DonutUsage';
import { UsageDonutsData } from './data';
import * as S from './styles';

export const UsageDonuts = () => {
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
        {UsageDonutsData.map((item) => {
          return <DonutUsage data={item} key={item.name} />;
        })}
      </S.DonutWrapper>
    </div>
  );
};
