import React from 'react';
import { Grid } from '@material-ui/core';
import { NavBar } from '../NavBar';
import { DropdownMenu } from '../DropdownMenu';
import * as S from './styles';

const data = {
  name: 'Date',
  values: {
    one: 'December',
    two: 'November',
    three: 'October',
  },
};

export const Header = () => {
  const classes = S.useStyles();
  return (
    <Grid container direction="row" justify="space-between" className={classes.grid}>
      <Grid item xs={11}>
        <NavBar />
      </Grid>
      <Grid item xs={1}>
        <DropdownMenu props={data} />
      </Grid>
    </Grid>
  );
};
