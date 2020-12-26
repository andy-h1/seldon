import React from 'react';
import { render } from '@testing-library/react';
import { CardStatistics } from '.';

const title = 'Project Views';
const statistic = 25670;

describe('Statistics Card component', () => {
  it('should render', () => {
    const { container } = render(<CardStatistics title={title} statistic={statistic} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
