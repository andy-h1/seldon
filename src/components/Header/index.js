import React from 'react';
import { NavBar } from '../NavBar';
import { DropdownMenu } from '../DropdownMenu';
import * as S from './styles';

export const Header = () => {
  return (
    <S.HeaderWrapper>
      <NavBar />
      <DropdownMenu />
    </S.HeaderWrapper>
  );
};
