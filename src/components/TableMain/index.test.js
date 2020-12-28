import React from 'react';
import { render } from '@testing-library/react';
import { TableMain } from '.';

describe('Main Table component', () => {
  it('should render', () => {
    const { container } = render(<TableMain />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
