import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableContainer, TableRow, TableSortLabel } from '@material-ui/core';
import { convertTime, convertToCurrency, getComparator, stableSort } from '../../utils';
import * as S from './styles';

const createData = (title, time, earned) => {
  return { title, time, earned };
};

const rows = [
  createData('Mockups for Figma', 16, 24.4),
  createData('Material Icons Set', 120, 14.4),
  createData('Material Design System', 1440, 68.0),
  createData('Material Desktop System', 1560, 128.5),
  createData('iOS toolkit for Figma', 2880, 58.0),
];

const headCells = [
  { id: 'title', numeric: false, disablePadding: true, label: 'Last Purchased' },
  { id: 'time', numeric: true, disablePadding: false, label: 'When' },
  { id: 'earned', numeric: true, disablePadding: false, label: 'Earned' },
];

const EnhancedTableHead = (props) => {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <S.TableHeader>
      <S.Row>
        {headCells.map((headCell) => (
          <S.TableHeaderCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              className={classes.labelText}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </S.TableHeaderCell>
        ))}
      </S.Row>
    </S.TableHeader>
  );
};

EnhancedTableHead.propTypes = {
  classes: PropTypes.shape.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export const TableSorting = () => {
  const classes = S.useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('last purchased');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <div className={classes.root}>
      <TableContainer>
        <Table size="small" aria-labelledby="tableTitle" aria-label="sub-table ">
          <EnhancedTableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row) => {
              return (
                <TableRow key={row.title}>
                  <S.Cell component="th" scope="row" padding="none" align="left">
                    {row.title}
                  </S.Cell>
                  <S.Cell align="right">{convertTime(row.time)}</S.Cell>
                  <S.EarnedText align="right">{convertToCurrency(row.earned)}</S.EarnedText>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
