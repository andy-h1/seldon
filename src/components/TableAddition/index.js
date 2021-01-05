import React from 'react';
import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { subtotalValueOne, subtotalValueTwo } from '../../utils';
import * as S from './styles';

const createRow = (desc, columnOne, columnTwo) => {
  return { desc, columnOne, columnTwo };
};

const rows = [
  createRow('Videos played', 10, 10),
  createRow('Watch finished', 100, 1000),
  createRow('Comment posted', 100, 100),
  createRow('Likes gained', 1000, 10000),
];

export const TableAddition = () => {
  const classes = S.useStyles();

  return (
    <TableContainer>
      <Table classes={classes} size="small" aria-label="sum table">
        <TableHead>
          <S.TableHeader>
            <S.TableHeaderCell align="left">Type of Action</S.TableHeaderCell>
            <S.TableHeaderCell align="right">Value One</S.TableHeaderCell>
            <S.TableHeaderCell align="right">Value Two</S.TableHeaderCell>
          </S.TableHeader>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <S.Row classes={classes.row} key={row.desc}>
              <S.Cell align="left">{row.desc}</S.Cell>
              <S.Cell align="right">{row.columnOne}</S.Cell>
              <S.Cell align="right">{row.columnTwo}</S.Cell>
            </S.Row>
          ))}

          <TableRow>
            <S.TotalTextCell align="left">Total</S.TotalTextCell>
            <S.TotalTextCell align="right">{subtotalValueOne(rows)}</S.TotalTextCell>
            <S.TotalTextCell align="right">{subtotalValueTwo(rows)}</S.TotalTextCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
