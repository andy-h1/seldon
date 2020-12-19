import React from 'react';
import * as S from './styles';
import { SidePanel } from '../SidePanel';
import { NavBar } from '../NavBar';
import { PageDashboard } from '../PageDashboard';

const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <NavBar />
      <SidePanel />
      <PageDashboard />
    </>
  );
};

export default App;
