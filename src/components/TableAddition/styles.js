import styled from 'styled-components';
import { TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { colours } from '../../tokens';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    margin: '1em 0',
  },
  table: {
    minWidth: 460,
  },
  header: {
    borderBottom: `3px solid ${colours.black}`,
  },
  headerText: {
    color: 'white',
    fontSize: '14px',
  },
  row: {
    borderBottom: `1 px solid ${colours.black}`,
  },
  text: {
    color: 'white',
    fontSize: '16px',
  },
  totalText: {
    color: `${colours.orange}`,
    fontSize: '16px',
  },
}));

export const Cell = styled(TableCell)`
  color: white;
  font-size: 19px;
  font-weight: 'bold';
`;
