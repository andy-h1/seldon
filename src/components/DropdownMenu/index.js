/* eslint-disable react/prop-types */
import React from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { shape, string } from 'prop-types';
import * as S from './styles';

export const DropdownMenu = ({ props }) => {
  const { values, name } = props;
  const { one, two, three } = values;
  const classes = S.useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl} size="small">
      <InputLabel className={classes.input} id="dropdown-menu">
        {name}
      </InputLabel>
      <Select labelId="dropdown-menu" id="dropdown-menu" label="Value" className={classes.selectEmpty}>
        <MenuItem value={one}>{one}</MenuItem>
        <MenuItem value={two}>{two}</MenuItem>
        <MenuItem value={three}>{three}</MenuItem>
      </Select>
    </FormControl>
  );
};

DropdownMenu.propTypes = {
  props: shape({
    name: string,
    values: shape({
      one: string,
      two: string,
      three: string,
    }),
  }).isRequired,
};
