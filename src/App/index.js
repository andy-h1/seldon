import React from 'react';
import { PageDashboard } from '../PageDashboard';
import { NavTabs } from '../TabPanel';

const App = () => {
  return (
    <div>
      <NavTabs />
      <PageDashboard />;
    </div>
  );
};

export default App;
