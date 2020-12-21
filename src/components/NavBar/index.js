/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Grid } from '@material-ui/core';
import { CampaignTable } from '../CampaignTable';
import { SumTable } from '../SumTable';
import { SubTable } from '../SubTable';
import { ProjectViews } from '../ProjectViews';
import { HeaderDashboard } from '../HeaderDashboard';
import { colours } from '../../tokens';
import { UsageStatistics } from '../UsageStatistics';

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

const Wrapper = styled(Grid)({
  border: '1px solid red',
  margin: '0 1em',
});

const Header = styled(AppBar)({
  backgroundColor: `${colours.darkGrey}`,
  color: `${colours.white}`,
  display: 'flex',
  justifyContent: 'center',
});

const StyledTab = styled(Tab)({
  textTransform: 'capitalize',
  fontWeight: 'bold',
});

export const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <Header position="static" elevation={0} m="2rem">
        <Tabs
          variant="standard"
          value={value}
          onChange={handleChange}
          aria-label="dashboard tabs"
          centered="true"
          indicatorColor="primary"
        >
          <StyledTab label="Analyze" {...a11yProps(0)} />
          <StyledTab label="My campaigns" {...a11yProps(1)} />
          <StyledTab label="Configure" {...a11yProps(2)} />
          <StyledTab label="Customize" {...a11yProps(3)} />
          <StyledTab label="Research" {...a11yProps(4)} />
          <StyledTab label="Inspect" {...a11yProps(5)} />
        </Tabs>
      </Header>
      <TabPanel value={value} index={0}>
        <HeaderDashboard />
        <ProjectViews />
        <UsageStatistics />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HeaderDashboard />
        <CampaignTable />
        <SumTable />
        <SubTable />
      </TabPanel>
    </Wrapper>
  );
};
