import React from 'react';
import { Grid } from '@material-ui/core';
import { SidePanel } from '../SidePanel';
import { Header } from '../Header';
import * as S from './styles';

const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <Grid container spacing={0}>
        <Grid item xs={3} direction="column" justify="center" alignItems="flex-start">
          <SidePanel />
        </Grid>
        <Grid item xs={9}>
          <Header />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
