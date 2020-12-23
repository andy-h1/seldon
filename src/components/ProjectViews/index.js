import React from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';
import { LineGraph } from '../LineGraph';
import { colours } from '../../tokens';
import * as S from './styles';

const width = 500;
const height = 500;

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: `${colours.lightGrey}`,
    color: `${colours.white}`,
  },
}));

export const ProjectViews = () => {
  const classes = useStyles();
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <Typography variant="h5">Project Views</Typography>
        <Button variant="contained" className={classes.button}>
          Full report
        </Button>
      </S.TitleWrapper>
      <LineGraph width={width} height={height} />
    </S.Wrapper>
  );
};
