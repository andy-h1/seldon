import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { GetAppOutlined, PrintOutlined } from '@material-ui/icons';
import { DropdownMenu } from '../DropdownMenu';
import * as S from './styles';

const data = {
  name: 'Date',
  values: {
    one: 'December',
    two: 'November',
    three: 'October',
  },
};

export const HeaderDashboard = () => {
  const classes = S.useStyles();

  return (
    <S.Wrapper>
      <Typography component="div" variant="h4">
        Dashboard
      </Typography>
      <S.ButtonWrapper>
        <DropdownMenu props={data} />
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
