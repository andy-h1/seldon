/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import { Tabs, Tab, Typography, withStyles } from '@material-ui/core';
import { TableMain } from '../TableMain';
import { ProjectViews } from '../ProjectViews';
import { HeaderDashboard } from '../HeaderDashboard';
import { SubTables } from '../SubTables';
import { colours } from '../../tokens';
import { UsageStatistics } from '../UsageStatistics';
import { Statistics } from '../Statistics';
import * as S from './styles';

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
//   borderBottom: `2px solid ${colours.lightGrey}`,
// });

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    '& > span': {
      width: '100%',
      backgroundColor: `${colours.white}`,
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = styled(Tab)({
  textTransform: 'capitalize',
  fontWeight: 'bold',
  fontSize: '16px',
});

export const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <S.Wrapper>
      <S.Header position="static" elevation={0}>
        <StyledTabs variant="standard" value={value} onChange={handleChange} aria-label="dashboard tabs">
          <StyledTab label="Analyze" {...a11yProps(0)} />
          <StyledTab label="My campaigns" {...a11yProps(1)} />
          <StyledTab label="Configure" {...a11yProps(2)} />
          <StyledTab label="Customize" {...a11yProps(3)} />
          <StyledTab label="Research" {...a11yProps(4)} />
          <StyledTab label="Inspect" {...a11yProps(5)} />
        </StyledTabs>
      </S.Header>
      <TabPanel value={value} index={0}>
        <HeaderDashboard />
        <Statistics />
        <ProjectViews />
        <UsageStatistics />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HeaderDashboard />
        <Statistics />
        <TableMain />
        <SubTables />
      </TabPanel>
    </S.Wrapper>
  );
};
