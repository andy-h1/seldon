import styled from 'styled-components';
import { ListItemText, makeStyles } from '@material-ui/core';
import { colours } from '../../tokens';

export const Button = styled.button`
  cursor: pointer;
  background-image: ${colours.greenBlueGradient};
  border: 1px solid ${colours.lightGrey};
  color: ${colours.darkGrey};
  font-size: 24px;
  border-radius: 25px;
  padding: 0.5em;
  width: 250px;
  text-align: center;
  margin: 3.5em 0 1em 2em;
  outline: none;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const useStyles = makeStyles(() => ({
  root: {
    width: 'fit-content',
    height: '100vh',
    color: `${colours.white}`,
  },
  icon: {
    color: `${colours.grey}`,
  },
}));

export const Text = styled(ListItemText)`
  p {
    color: ${colours.grey};
  }
`;
