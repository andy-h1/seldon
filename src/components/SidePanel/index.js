import React from 'react';
import { List, ListItem, ListItemAvatar, IconButton } from '@material-ui/core';
import {
  BarChartOutlined,
  DataUsageOutlined,
  DoneOutlineOutlined,
  PrintOutlined,
  BuildOutlined,
} from '@material-ui/icons';
import * as S from './styles';

export const SidePanel = () => {
  const classes = S.useStyles();

  return (
    <List className={classes.root}>
      <S.Button>+ New Campaign</S.Button>
      <ListItem>
        <ListItemAvatar>
          <IconButton>
            <DataUsageOutlined className={classes.icon} />
          </IconButton>
        </ListItemAvatar>
        <S.Text primary="Metrics" secondary="Track your apps across devices" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <IconButton>
            <DoneOutlineOutlined className={classes.icon} />
          </IconButton>
        </ListItemAvatar>
        <S.Text primary="Results" secondary="View your results as an Excel file" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <IconButton>
            <BarChartOutlined className={classes.icon} />
          </IconButton>
        </ListItemAvatar>
        <S.Text primary="Google Analytics" secondary="Track visits to your sites" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <IconButton>
            <PrintOutlined className={classes.icon} />
          </IconButton>
        </ListItemAvatar>
        <S.Text primary="Reports" secondary="Get insights into the big data" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <IconButton>
            <BuildOutlined className={classes.icon} />
          </IconButton>
        </ListItemAvatar>
        <S.Text primary="More Tools" secondary="Upgrade your plan to PRO" />
      </ListItem>
    </List>
  );
};
