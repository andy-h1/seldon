import React from 'react';
import { render } from '@testing-library/react';
import { TableSorting } from '.';

describe('Sorting Table component', () => {
  it('should render', () => {
    const { container } = render(<TableSorting />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
