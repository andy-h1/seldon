import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { NavBar } from '../NavBar';
import { DropdownMenu } from '../DropdownMenu';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Wrapper>
      <Box>
        <ArrowBack />
        <Typography>Back to previous</Typography>
      </Box>
      <NavBar />
      <DropdownMenu />
    </S.Wrapper>
  );
};
