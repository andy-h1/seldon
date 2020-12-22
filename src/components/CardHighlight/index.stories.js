import React from 'react';
import { CardHighlight } from '.';

const data = {
  title: 'project views',
  statistics: 23354,
};

export default {
  title: 'CardHighlight',
  component: CardHighlight,
};

export const Template = (args) => <CardHighlight {...args} data={data} />;
