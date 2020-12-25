import React from 'react';
import { CardBarChart } from '.';

const data = {
  title: 'project views',
  statistics: 23354,
};

export default {
  title: 'CardBarChart',
  component: CardBarChart,
};

export const BarChartCard = (args) => <CardBarChart {...args} statistics={data.statistics} title={data.title} />;
