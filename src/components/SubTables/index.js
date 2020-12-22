import React from 'react';
import { TableAddition } from '../TableAddition';
import { TableSorting } from '../TableSorting';
import * as S from './styles';

export const SubTables = () => {
  return (
    <S.TablesWrapper>
      <TableAddition />
      <TableSorting />
    </S.TablesWrapper>
  );
};
