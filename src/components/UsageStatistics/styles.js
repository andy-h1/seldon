import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { colours } from '../../tokens';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 1em;
`;

export const DonutWrapper = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: `${colours.lightGrey}`,
    color: `${colours.white}`,
  },
}));
