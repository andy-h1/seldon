import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { TableMain } from '.';

describe('Main Table component', () => {
  it('should render', async () => {
    const { container } = render(<TableMain />);
    await waitFor(() => expect(container.firstChild).toMatchSnapshot());
  });
});
