import { makeStyles } from '@material-ui/core';
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
  earnedText: {
    color: `${colours.green}`,
    fontSize: '16px',
  },
  labelText: {
    '&.MuiTableSortLabel-root, &.MuiTableSortLabel-active': {
      color: `${colours.white}`,
    },
  },
}));
