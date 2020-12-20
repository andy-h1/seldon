/* eslint-disable no-use-before-define */
import styled from 'styled-components';
import { AppBar, Tab } from '@material-ui/core';
import { colours } from '../../tokens';

export const Header = styled(AppBar)({
  backgroundColor: `${colours.darkGrey}`,
  color: `${colours.white}`,
  display: 'flex',
  justifyContent: 'center',
});

export const StyledTab = styled(Tab)({
  textTransform: 'capitalize',
  fontWeight: 'bold',
});
