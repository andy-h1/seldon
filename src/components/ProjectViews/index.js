import React from 'react';
import { Button } from '@material-ui/core';
import { LineGraph } from '../LineGraph';
import * as S from './styles';

export const ProjectViews = () => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <h3>Project Views</h3>
        <Button variant="contained">Full report</Button>
      </S.TitleWrapper>
      <LineGraph />
    </S.Wrapper>
  );
};
