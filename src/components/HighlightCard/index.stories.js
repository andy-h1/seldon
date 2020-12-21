import React from 'react';
import { HighlightCard } from '.';

const data = {
  title: 'project views',
  statistics: 23354,
};

export default {
  title: 'HighlightCard',
  component: HighlightCard,
};

export const Template = (args) => <HighlightCard {...args} data={data} />;
