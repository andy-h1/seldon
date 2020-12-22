import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { SidePanel } from '../SidePanel';
import { Header } from '../Header';
import * as S from './styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <S.GlobalStyle />
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={3} direction="column" justify="center" alignItems="flex-start">
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
