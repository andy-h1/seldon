import React from 'react';
import { UsageDonut } from '.';

const data = [
  {
    name: 'Components',
    usage: 895,
    total: 1000,
    color: 'red',
  },
  {
    name: 'Templates',
    usage: 284,
    total: 500,
    color: 'blue',
  },
  {
    name: 'Pages',
    usage: 23,
    total: 100,
    color: 'green',
  },
  {
    name: 'Projects',
    usage: 1,
    total: 2,
    color: 'pink',
  },
  {
    name: 'Team Members',
    usage: 8,
    total: 10,
    color: 'purple',
  },
];

export default {
  title: 'UsageDonut',
  component: UsageDonut,
};

export const Template = (args) => {
  return (
    <>
      {data.map((item) => {
        return <UsageDonut {...args} data={item} key={item.name} />;
      })}
    </>
  );
};
