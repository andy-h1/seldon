/* eslint-disable react/prop-types */
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { arrayOf, shape, string } from 'prop-types';
import * as S from './styles';

export const DropdownMenu = ({ props }) => {
  const { values, name } = props;
  const { one, two, three } = values;
  const classes = S.useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl} size="small">
        <InputLabel id="dropdown-menu">{name}</InputLabel>
        <Select labelId="dropdown-menu" id="dropdown-menu" label="Value" className={classes.selectEmpty}>
          <MenuItem value={one}>{one}</MenuItem>
          <MenuItem value={two}>{two}</MenuItem>
          <MenuItem value={three}>{three}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

DropdownMenu.propTypes = {
  props: arrayOf(
    shape({
      name: string,
      values: shape({
        one: string,
        two: string,
        three: string,
      }),
    }),
  ).isRequired,
};
