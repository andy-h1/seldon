import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { TableBody, TableCell, TableHead } from '@material-ui/core';
import { colours } from '../../tokens';

export const useStyles = makeStyles(() => ({
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
  labelText: {
    '&.MuiTableSortLabel-root, &.MuiTableSortLabel-active': {
      color: `${colours.white}`,
    },
  },
}));

export const TableHeader = styled(TableHead)`
  border-bottom: 3px solid ${colours.black};
`;

export const TableHeaderCell = styled(TableCell)`
  color: white;
  font-size: 16px;
`;

export const Table = styled(TableBody)`
  border-bottom: 1 px solid ${colours.black};
`;

export const Cell = styled(TableCell)`
  color: white;
  font-size: 19px;
  font-weight: bold;
  border-bottom: 1 px solid ${colours.black};
`;
