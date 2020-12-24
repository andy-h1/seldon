import React from 'react';
import { Grid } from '@material-ui/core';
import { SidePanel } from '../SidePanel';
import { Header } from '../Header';
import * as S from './styles';

const App = () => {
  const classes = S.useStyles();
  return (
    <>
      <S.GlobalStyle />
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <SidePanel />
          </Grid>
          <Grid item xs={8}>
            <Header />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default App;
