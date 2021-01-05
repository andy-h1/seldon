import styled from 'styled-components';
import { TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { colours } from '../../tokens';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    margin: '1em 0',
  },
}));

export const TableHeader = styled(TableRow)`
  border-bottom: 3px solid ${colours.black};
`;

export const TableHeaderCell = styled(TableCell)`
  color: white;
  font-size: 14px;
`;

export const Row = styled(TableRow)`
  border-bottom: 1px solid ${colours.black};
`;

export const Cell = styled(TableCell)`
  color: white;
  font-size: 16px;
`;

export const TotalTextCell = styled(TableCell)`
  color: ${colours.orange};
  font-size: 16px;
`;
