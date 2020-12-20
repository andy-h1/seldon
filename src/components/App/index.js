import React from 'react';
import * as S from './styles';
import { SidePanel } from '../SidePanel';
import { Header } from '../Header';
import { PageDashboard } from '../PageDashboard';

const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <Header />
      <SidePanel />
      <PageDashboard />
    </>
  );
};

export default App;
