import React from 'react';
import { render } from '@testing-library/react';
import { LineGraph } from '.';

describe('Line Graph component', () => {
  it('should render', () => {
    const { container } = render(<LineGraph />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it.todo('should show correct value when hovering over the line graph');
});
