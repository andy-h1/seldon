import styled from 'styled-components';
import { AppBar, Grid, Tab } from '@material-ui/core';
import { colours } from '../../tokens';

export const Header = styled(AppBar)({
  borderBottom: `2px solid ${colours.lightGrey}`,
  backgroundColor: `${colours.darkGrey}`,
  color: `${colours.white}`,
});

export const Wrapper = styled(Grid)({
  margin: '0 1em 0 0',
  maxWidth: 'fit-content',
  width: '950px',
});

export const StyledTab = styled(Tab)({
  textTransform: 'capitalize',
  fontWeight: 'bold',
  fontSize: '16px',
});

// export const StyledTabs = withStyles({
//   indicator: {
//     display: 'flex',
//     justifyContent: 'center',
//     '& > span': {
//       width: '100%',
//       backgroundColor: `${colours.white}`,
//     },
//   },
// })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
