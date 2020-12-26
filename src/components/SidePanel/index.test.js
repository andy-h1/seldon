import React from 'react';
import { render } from '@testing-library/react';
import { SidePanel } from '.';

describe('Side Panel component', () => {
  it('should render', () => {
    const { container } = render(<SidePanel />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
