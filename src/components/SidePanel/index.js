import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import DataUsageOutlinedIcon from '@material-ui/icons/DataUsageOutlined';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import * as S from './styles';

export const SidePanel = () => {
  const classes = S.useStyles();

  return (
    <List className={classes.root}>
      <S.Button>+ New Campaign</S.Button>
      <ListItem>
        <ListItemAvatar>
          <IconButton>
            <DataUsageOutlinedIcon className={classes.icon} />
          </IconButton>
        </ListItemAvatar>
        <S.Text primary="Metrics" secondary="Track your apps across devices" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <IconButton>
            <DoneOutlineOutlinedIcon className={classes.icon} />
          </IconButton>
        </ListItemAvatar>
        <S.Text primary="Results" secondary="View your results as an Excel file" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <IconButton>
            <BarChartOutlinedIcon className={classes.icon} />
          </IconButton>
        </ListItemAvatar>
        <S.Text primary="Google Analytics" secondary="Track visits to your sites" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <IconButton>
            <PrintOutlinedIcon className={classes.icon} />
          </IconButton>
        </ListItemAvatar>
        <S.Text primary="Reports" secondary="Get insights into the big data" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <IconButton>
            <BuildOutlinedIcon className={classes.icon} />
          </IconButton>
        </ListItemAvatar>
        <S.Text primary="More Tools" secondary="Upgrade your plan to PRO" />
      </ListItem>
    </List>
  );
};
