import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import DataUsageOutlinedIcon from '@material-ui/icons/DataUsageOutlined';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import { colours } from '../../tokens';

const useStyles = makeStyles(() => ({
  root: {
    width: 'fit-content',
    height: '100%',
    backgroundColor: `${colours.darkGrey}`,
    color: `${colours.white}`,
    fontSize: '60px',
    border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
}));

export const SidePanel = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <IconButton>
            <DataUsageOutlinedIcon />
          </IconButton>
        </ListItemAvatar>
        <ListItemText primary="Metrics" secondary="Track your apps across devices" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <IconButton>
            <DoneOutlineOutlinedIcon />
          </IconButton>
        </ListItemAvatar>
        <ListItemText primary="Results" secondary="View your results as an Excel file" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <IconButton>
            <BarChartOutlinedIcon />
          </IconButton>
        </ListItemAvatar>
        <ListItemText primary="Google Analytics" secondary="Track visits to your sites" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <IconButton>
            <PrintOutlinedIcon />
          </IconButton>
        </ListItemAvatar>
        <ListItemText primary="Reports" secondary="Get insights into the big data" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <IconButton>
            <BuildOutlinedIcon />
          </IconButton>
        </ListItemAvatar>
        <ListItemText primary="More Tools" secondary="Upgrade your plan to PRO" />
      </ListItem>
    </List>
  );
};
