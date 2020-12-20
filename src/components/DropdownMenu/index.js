import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const DropdownMenu = () => {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="dropdown-menu">Date</InputLabel>
        <Select labelId="dropdown-menu" id="dropdown-menu" label="Value">
          <MenuItem value={1}>Value 1</MenuItem>
          <MenuItem value={2}>Value 2</MenuItem>
          <MenuItem value={3}>Value 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
