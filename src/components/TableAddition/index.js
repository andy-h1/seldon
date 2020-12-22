import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    maxWidth: 500,
  },
});

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
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="sum table">
        <TableHead>
          <TableRow>
            <TableCell>Type of Action</TableCell>
            <TableCell align="right">Value One</TableCell>
            <TableCell align="right">Value Two</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.columnOne}</TableCell>
              <TableCell align="right">{row.columnTwo}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell align="right">{subtotalValueOne(rows)}</TableCell>
            <TableCell align="right">{subtotalValueTwo(rows)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
