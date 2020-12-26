import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { UsageDonuts } from '.';

describe('Usage Donuts component', () => {
  it('should render', async () => {
    const { container } = render(<UsageDonuts />);
    await waitFor(() => expect(container.firstChild).toMatchSnapshot());
  });
});
