import styled from 'styled-components';
import { colours } from '../../tokens';

export const CardWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${colours.lightGrey};
  background: ${colours.darkGrey};
  height: 140px;
  width: 210px;
  cursor: pointer;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  &:hover {
    border: 1px solid ${colours.white};
    background: ${colours.black};
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1em;
`;

export const Title = styled.p`
  color: ${colours.grey};
  font-size: 12px;
`;

export const Text = styled.p`
  color: ${colours.white};
  font-size: 20px;
`;
