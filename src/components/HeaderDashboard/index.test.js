import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { HeaderDashboard } from '.';

describe('Dashboard Header component', () => {
  it('should render', async () => {
    const { container } = render(<HeaderDashboard />);
    await waitFor(() => expect(container.firstChild).toMatchSnapshot());
  });
});
