import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { LineGraph } from '../LineGraph';
import * as S from './styles';

export const ProjectViews = () => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <Typography variant="h5">Project Views</Typography>
        <Button variant="contained">Full report</Button>
      </S.TitleWrapper>
      <LineGraph />
    </S.Wrapper>
  );
};
