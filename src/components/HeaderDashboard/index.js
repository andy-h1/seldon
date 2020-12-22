import { Typography, Grid, Button } from '@material-ui/core';
import React from 'react';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import { makeStyles } from '@material-ui/core/styles';
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
    margin: '3em 0 1em 0',
  },
}));

export const HeaderDashboard = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-between" alignItems="flex-start" className={classes.grid}>
      <Grid item xs={9}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>
      <Grid container xs={3} justify="space-around">
        <DropdownMenu props={data} />
        <Button aria-label="print" variant="contained">
          <PrintOutlinedIcon />
        </Button>
        <Button aria-label="download" variant="contained">
          <GetAppOutlinedIcon />
        </Button>
      </Grid>
    </Grid>
  );
};
