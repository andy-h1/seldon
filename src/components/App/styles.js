import { createGlobalStyle } from 'styled-components';
import { makeStyles } from '@material-ui/core';
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

export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));
