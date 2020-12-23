import { Typography, Button } from '@material-ui/core';
import React from 'react';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
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

// const useStyles = makeStyles(() => ({
//   button: {
//     backgroundColor: `${colours.lightGrey}`,
//     color: `${colours.white}`,
//   },
// }));

export const HeaderDashboard = () => {
  const classes = S.useStyles();

  return (
    <S.Wrapper>
      <Typography variant="h4">Dashboard</Typography>
      <S.ButtonWrapper>
        <DropdownMenu props={data} />
        <Button aria-label="print" variant="contained" className={classes.button} size="small">
          <PrintOutlinedIcon />
        </Button>
        <Button aria-label="download" variant="contained" className={classes.button} size="small">
          <GetAppOutlinedIcon />
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};
