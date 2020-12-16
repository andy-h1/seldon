import React from 'react';
import { Grid } from '@material-ui/core';
// import { NavTabs } from '../TabPanel';
import { SidePanel } from '../SidePanel';

export const PageDashboard = () => {
  return (
    <Grid>
      {/* <NavTabs /> */}
      <SidePanel />
      <h1>Dashboard</h1>
    </Grid>
  );
};
