import React from 'react';
import { render } from '@testing-library/react';
import { TableAddition } from '.';

const rows = [
  ['Youtube', 10, 10],
  ['Facebook', 20, 20],
];

describe('Addition Table component', () => {
  it('should render', () => {
    const { container } = render(<TableAddition rows={rows} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
