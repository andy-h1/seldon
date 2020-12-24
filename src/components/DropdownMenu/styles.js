import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 0,
    width: 'fit-content',
    height: '10px',
    minWidth: 100,
  },
  input: {
    color: 'white',
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
    border: '1px solid white',
  },
}));
