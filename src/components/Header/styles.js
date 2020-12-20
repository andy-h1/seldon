import styled from 'styled-components';
import { colours } from '../../tokens';

export const HeaderWrapper = styled.div`
  border-bottom: 3px solid ${colours.lightGrey};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Wrapper = styled.div`
  display: flex;
`;
