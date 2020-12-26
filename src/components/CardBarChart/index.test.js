import React from 'react';
import { render } from '@testing-library/react';
import { CardBarChart } from '.';

export const data = {
  title: 'attachment views',
  statistic: 22386,
};

describe('Card BarChart component', () => {
  it('should render', () => {
    const { container } = render(<CardBarChart title={data.title} statistic={data.statistic} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
