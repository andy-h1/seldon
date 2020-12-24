import styled from 'styled-components';
import { colours } from '../../tokens';

export const CardWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${colours.lightGrey};
  background-image: ${colours.greenBlueGradient};
  background: ${colours.darkGrey};
  height: 140px;
  width: 210px;
  cursor: pointer;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  &:hover {
    border: 2px solid ${colours.white};
    color: ${colours.white};
  }
`;

export const Title = styled.p`
  color: ${colours.white};
  margin: 1em;
  font-size: 1.17em;
  font-weight: bolder;
`;

export const Statistics = styled.p`
  font-size: 40px;
  margin: 0.5em;
  color: aquamarine;
`;
