import React from 'react';
import { render } from '@testing-library/react';
import { DonutUsage } from '.';

const mockData = {
  name: 'Youtube Views',
  usage: 750,
  total: 1000,
  color: 'red',
};

describe('Usage Donut component', () => {
  it('should render', () => {
    const { container } = render(<DonutUsage data={mockData} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
