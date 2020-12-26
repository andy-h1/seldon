import React from 'react';
import { render } from '@testing-library/react';
import { BarChart } from '.';

describe('Bar Chart component', () => {
  it('should render', () => {
    const { container } = render(<BarChart />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
