import styled, { createGlobalStyle } from 'styled-components';
import { colours } from '../../tokens';

export const GlobalStyle = createGlobalStyle`

body {
    background-color: ${colours.darkGrey};
    color: ${colours.white};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat (3, 1fr);
`;

export const SidePanelWrapper = styled.div`
  grid-row: 2 / span 3;
`;
