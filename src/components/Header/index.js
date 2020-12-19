import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { ArrowBackIcon } from '@material-ui/icons';
import { NavBar } from '../NavBar';

export const Header = () => {
  return (
    <div>
      <Box>
        {ArrowBackIcon}
        <Typography>Back to previous</Typography>
      </Box>
      <NavBar />
    </div>
  );
};
