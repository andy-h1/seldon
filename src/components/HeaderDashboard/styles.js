import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import { colours } from '../../tokens';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3em 0 1em 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: `${colours.lightGrey}`,
    color: `${colours.white}`,
    margin: '0 0.5em',
  },
}));
