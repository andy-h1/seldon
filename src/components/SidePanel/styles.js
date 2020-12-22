import styled from 'styled-components';
import { colours } from '../../tokens';

export const Button = styled.button`
  cursor: pointer;
  background-image: ${colours.greenBlueGradient};
  border: 1px solid ${colours.lightGrey};
  color: ${colours.darkGrey};
  font-size: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  border-radius: 25px;
  padding: 0.5em;
  width: 250px;
  text-align: center;
  margin: 3.5em 0 1em 1em;
  outline: none;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
