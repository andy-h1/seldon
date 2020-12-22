import React from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';
import { UsageDonut } from '../UsageDonut';
import * as S from './styles';
import { colours } from '../../tokens';

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

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: `${colours.lightGrey}`,
    color: `${colours.white}`,
  },
}));

// add data into args
export const UsageStatistics = () => {
  const classes = useStyles();
  return (
    <div>
      <S.TitleWrapper>
        <Typography variant="h5">Usage Statistics</Typography>
        <Button variant="contained" className={classes.button}>
          Upgrade Account
        </Button>
      </S.TitleWrapper>

      <S.DonutWrapper>
        {data.map((item) => {
          return <UsageDonut data={item} key={item.name} />;
        })}
      </S.DonutWrapper>
    </div>
  );
};
