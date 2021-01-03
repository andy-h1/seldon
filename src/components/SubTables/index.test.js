import React from 'react';
import { render } from '@testing-library/react';
import { SubTables } from '.';

describe('Sub Tables component', () => {
  it('should render', () => {
    const { container } = render(<SubTables />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
