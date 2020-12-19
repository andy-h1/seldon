/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core';
import { CampaignTable } from '../CampaignTable';
import { SumTable } from '../SumTable';
import { SubTable } from '../SubTable';
// import { LineGraph } from '../LineGraph';
import { colours } from '../../tokens';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
};

TabPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
};

// const Header = styled(AppBar)({
//   backgroundColor: `${colours.darkGrey}`,
//   color: `${colours.white}`,
//   display: 'flex',
//   justifyContent: 'center',
// });

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: `${colours.darkGrey}`,
    position: 'relative',
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Tabs variant="standard" value={value} onChange={handleChange} aria-label="dashboard tabs">
          <Tab label="Analyze" {...a11yProps(0)} />
          <Tab label="My campaigns" {...a11yProps(1)} />
          <Tab label="Configure" {...a11yProps(2)} />
          <Tab label="Customize" {...a11yProps(3)} />
          <Tab label="Research" {...a11yProps(4)} />
          <Tab label="Inspect" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {/* <LineGraph /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CampaignTable />
        <SumTable />
        <SubTable />
      </TabPanel>
      <TabPanel value={value} index={2} />
      <TabPanel value={value} index={3} />
      <TabPanel value={value} index={4} />
      <TabPanel value={value} index={5} />
    </div>
  );
};
