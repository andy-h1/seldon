import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { colours } from '../../tokens';

const createData = (campaign, efficiency, plays, finished, likes, comments) => {
  return { campaign, efficiency, plays, finished, likes, comments };
};

const rows = [
  createData('Instagram stories marketing', 186, 186, 92, 8, 1),
  createData('Social Networks traffic', 95, 95, 31, 11, 0),
  createData('Visitors from video sources', 329, 329, 256, 32, 4),
  createData('Other Referrers', 804, 804, 697, 40, 22),
];

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

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
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    margin: '1em 0',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  text: {
    color: 'white',
    fontSize: '19px',
    fontWeight: 'bold',
    borderBottom: `1 px solid ${colours.black}`,
  },
  header: {
    borderBottom: `3px solid ${colours.black}`,
  },
  headerText: {
    color: 'white',
    fontSize: '16px',
  },
  row: {
    borderBottom: `1 px solid ${colours.black}`,
  },
}));

export const TableMain = () => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <div className={classes.root}>
      <TableContainer>
        <Table aria-labelledby="tableTitle" aria-label="enhanced table">
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
