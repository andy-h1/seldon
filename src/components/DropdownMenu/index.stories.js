import React from 'react';
import { DropdownMenu } from '.';

const props = {
  name: 'Date',
  values: {
    one: 'One',
    two: 'Two',
    three: 'Three',
  },
};

export default {
  title: 'DropdownMenu',
  component: DropdownMenu,
};

export const Template = (args) => <DropdownMenu {...args} props={props} />;
