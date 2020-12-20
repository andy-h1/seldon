import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { BarChart, Build, DataUsage, DoneOutline, Print } from '@material-ui/icons';
import { colours } from '../../tokens';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    maxWidth: 360,
    backgroundColor: `${colours.darkGrey}`,
    color: `${colours.white}`,
  },
  typography: {
    color: `${colours.lightGrey}`,
  },
}));

export const SidePanel = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DataUsage />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Metrics" secondary="Track your apps across devices" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DoneOutline />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Results" secondary="View your results as an Excel file" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BarChart />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Google Analytics" secondary="Track visits to your sites" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Print />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Reports" secondary="Get insights into the big data" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Build />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="More Tools" secondary="Upgrade your plan to PRO" />
      </ListItem>
    </List>
  );
};
