import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { GetAppOutlined, PrintOutlined } from '@material-ui/icons';
import * as S from './styles';

export const HeaderDashboard = () => {
  const classes = S.useStyles();

  return (
    <S.Wrapper>
      <div>
        <Typography component="div" variant="h4">
          Dashboard
        </Typography>
      </div>
      <S.ButtonWrapper>
        <Button aria-label="print" variant="contained" className={classes.button} size="small">
          <PrintOutlined />
        </Button>
        <Button aria-label="download" variant="contained" className={classes.button} size="small">
          <GetAppOutlined />
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};
