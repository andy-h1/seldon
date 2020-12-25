import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { colours } from '../../tokens';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0 0 0;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: `${colours.lightGrey}`,
    color: `${colours.white}`,
  },
}));
