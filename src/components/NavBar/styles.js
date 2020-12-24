/* eslint-disable no-use-before-define */
import styled from 'styled-components';
import { AppBar, Grid, Tab } from '@material-ui/core';
import { colours } from '../../tokens';

// export const Header = styled(AppBar)({
//   backgroundColor: `${colours.darkGrey}`,
//   color: `${colours.white}`,
//   padding: 0,
//   display: 'flex',
//   justifyContent: 'center',
// });

export const Header = styled(AppBar)({
  backgroundColor: `${colours.darkGrey}`,
  color: `${colours.white}`,
  borderBottom: `2px solid ${colours.lightGrey}`,
});

export const StyledTab = styled(Tab)({
  textTransform: 'capitalize',
  fontWeight: 'bold',
  padding: 0,
  fontSize: '16px',
});

export const Wrapper = styled(Grid)({
  margin: '0 1em 0 0',
});
