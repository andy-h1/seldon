import { makeStyles } from '@material-ui/core/styles';
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
  labelText: {
    '&.MuiTableSortLabel-root, &.MuiTableSortLabel-active': {
      color: `${colours.white}`,
    },
  },
}));
