import React from 'react';
import { render } from '@testing-library/react';
import { StatisticCards } from '.';

describe('Cards Statistic component', () => {
  it('should render', () => {
    const { container } = render(<StatisticCards />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
