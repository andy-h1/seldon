/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Typography, withStyles } from '@material-ui/core';
import { TableMain } from '../TableMain';
import { ProjectViews } from '../ProjectViews';
import { HeaderDashboard } from '../HeaderDashboard';
import { SubTables } from '../SubTables';
import { UsageStatistics } from '../UsageStatistics';
import { StatisticCards } from '../StatisticCards';
import { BarChartCards } from '../BarChartCards';
import * as S from './styles';
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
      {value === index && <Typography component="div">{children}</Typography>}
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

// Need to refactor this code
const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    '& > span': {
      width: '100%',
      backgroundColor: `${colours.white}`,
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <S.Wrapper>
      <S.Header position="static" elevation={0}>
        <StyledTabs variant="standard" value={value} onChange={handleChange} aria-label="dashboard tabs">
          <S.StyledTab label="Analyze" {...a11yProps(0)} />
          <S.StyledTab label="My campaigns" {...a11yProps(1)} />
          <S.StyledTab label="Configure" {...a11yProps(2)} />
          <S.StyledTab label="Customize" {...a11yProps(3)} />
          <S.StyledTab label="Research" {...a11yProps(4)} />
          <S.StyledTab label="Inspect" {...a11yProps(5)} />
        </StyledTabs>
      </S.Header>
      <TabPanel value={value} index={0}>
        <HeaderDashboard />
        <BarChartCards />
        <ProjectViews />
        <UsageStatistics />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HeaderDashboard />
        <StatisticCards />
        <TableMain />
        <SubTables />
      </TabPanel>
    </S.Wrapper>
  );
};
