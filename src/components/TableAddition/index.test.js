import React from 'react';
import { render } from '@testing-library/react';
import { TableAddition } from '.';

describe('Addition Table component', () => {
  it('should render', () => {
    const { container } = render(<TableAddition />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
