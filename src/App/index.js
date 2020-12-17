import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SidePanel } from '../SidePanel';
import { NavBar } from '../NavBar';
import { PageDashboard } from '../PageDashboard';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat (12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>Logo</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 9' }}>
          <NavBar />
        </div>
        <div style={{ gridColumnEnd: 'span 3', gridRowEnd: 'span 12' }}>
          <SidePanel />
        </div>
        <div style={{ gridColumnEnd: 'span 9' }}>
          <PageDashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
