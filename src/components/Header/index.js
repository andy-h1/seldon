import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { NavBar } from '../NavBar';
import { DropdownMenu } from '../DropdownMenu';
// import * as S from './styles';

const data = {
  name: 'Date',
  values: {
    one: 'December',
    two: 'November',
    three: 'October',
  },
};

const useStyles = makeStyles(() => ({
  grid: {
    width: '100%',
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="space-around" alignItems="stretch" className={classes.grid}>
      <Grid item xs={11}>
        <NavBar />
      </Grid>
      <Grid item xs={1}>
        <DropdownMenu props={data} />
      </Grid>
    </Grid>
  );
};
