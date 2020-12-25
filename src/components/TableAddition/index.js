import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import * as S from './styles';

const createRow = (desc, columnOne, columnTwo) => {
  return { desc, columnOne, columnTwo };
};

const subtotalValueOne = (items) => {
  return items.map(({ columnOne }) => columnOne).reduce((sum, i) => sum + i, 0);
};

const subtotalValueTwo = (items) => {
  return items.map(({ columnTwo }) => columnTwo).reduce((sum, i) => sum + i, 0);
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
          <TableRow className={classes.header}>
            <TableCell className={classes.headerText} align="left">
              Type of Action
            </TableCell>
            <TableCell className={classes.headerText} align="right">
              Value One
            </TableCell>
            <TableCell className={classes.headerText} align="right">
              Value Two
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow classes={classes.row} key={row.desc}>
              <TableCell className={classes.text} align="left">
                {row.desc}
              </TableCell>
              <TableCell className={classes.headerText} align="right">
                {row.columnOne}
              </TableCell>
              <TableCell className={classes.headerText} align="right">
                {row.columnTwo}
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell className={classes.totalText} align="left">
              Total
            </TableCell>
            <TableCell className={classes.totalText} align="right">
              {subtotalValueOne(rows)}
            </TableCell>
            <TableCell className={classes.totalText} align="right">
              {subtotalValueTwo(rows)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
