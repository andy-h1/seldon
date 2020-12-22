import React from 'react';
import { CardStatistics } from '.';

const data = {
  title: 'Likes',
  statistic: 1240,
};

export default {
  title: 'CardStatistics',
  component: CardStatistics,
};

export const Template = (args) => <CardStatistics {...args} data={data} />;
