import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { LineGraph } from '../LineGraph';
import * as S from './styles';

export const ProjectViews = () => {
  const classes = S.useStyles();
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <Typography component="span" variant="h5">
          Project Views
        </Typography>
        <Button variant="contained" className={classes.button}>
          Full report
        </Button>
      </S.TitleWrapper>
      <LineGraph />
    </S.Wrapper>
  );
};
