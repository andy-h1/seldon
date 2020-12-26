import React from 'react';
import { render } from '@testing-library/react';
import { BarChartCards } from '.';

describe('Bar Chart Cards component', () => {
  it('should render', () => {
    const { container } = render(<BarChartCards />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
