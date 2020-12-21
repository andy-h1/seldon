import { Typography, Grid, IconButton } from '@material-ui/core';
import React from 'react';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
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

export const HeaderDashboard = () => {
  return (
    <Grid container direction="row" justify="space-between" alignItems="flex-start">
      <Grid item xs={9}>
        <Typography variant="h3">Dashboard</Typography>
      </Grid>
      <Grid container xs={3} justify="space-around">
        <DropdownMenu props={data} />
        <IconButton aria-label="print">
          <PrintOutlinedIcon />
        </IconButton>
        <IconButton aria-label="download">
          <GetAppOutlinedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
