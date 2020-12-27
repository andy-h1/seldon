import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from '@material-ui/core';
import { getComparator, stableSort } from '../../utils';
import * as S from './styles';

const createData = (campaign, efficiency, plays, finished, likes, comments) => {
  return { campaign, efficiency, plays, finished, likes, comments };
};

const rows = [
  createData('Instagram stories marketing', 186, 186, 92, 8, 1),
  createData('Social Networks traffic', 95, 95, 31, 11, 0),
  createData('Visitors from video sources', 329, 329, 256, 32, 4),
  createData('Other Referrers', 804, 804, 697, 40, 22),
];

const headCells = [
  { id: 'campaign', numeric: false, disablePadding: true, label: 'Campaign' },
  { id: 'efficiency', numeric: true, disablePadding: false, label: 'Efficiency' },
  { id: 'plays', numeric: true, disablePadding: false, label: 'Plays' },
  { id: 'finished', numeric: true, disablePadding: false, label: 'Finished' },
  { id: 'likes', numeric: true, disablePadding: false, label: 'Likes' },
  { id: 'comments', numeric: true, disablePadding: false, label: 'Comments' },
];

const EnhancedTableHead = (props) => {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className={classes.header}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            className={classes.headerText}
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
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  classes: PropTypes.shape.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export const TableMain = () => {
  const classes = S.useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('efficiency');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <div className={classes.root}>
      <TableContainer>
        <Table aria-labelledby="tableTitle" aria-label="enhanced-table">
          <EnhancedTableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody className={classes.row}>
            {stableSort(rows, getComparator(order, orderBy)).map((row) => {
              return (
                <TableRow key={row.campaign}>
                  <TableCell className={classes.text} component="th" scope="row" padding="none">
                    {row.campaign}
                  </TableCell>
                  <TableCell className={classes.text} align="right">
                    {row.efficiency}
                  </TableCell>
                  <TableCell className={classes.text} align="right">
                    {row.plays}
                  </TableCell>
                  <TableCell className={classes.text} align="right">
                    {row.finished}
                  </TableCell>
                  <TableCell className={classes.text} align="right">
                    {row.likes}
                  </TableCell>
                  <TableCell className={classes.text} align="right">
                    {row.comments}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
