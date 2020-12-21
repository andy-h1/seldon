import React from 'react';
import { Grid } from '@material-ui/core';
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

export const Header = () => {
  return (
    <Grid container direction="row" justify="space-between" alignItems="stretch">
      <Grid item xs={10} mr={2}>
        <NavBar />
      </Grid>
      <Grid item xs={2}>
        <DropdownMenu props={data} />
      </Grid>
    </Grid>
  );
};
