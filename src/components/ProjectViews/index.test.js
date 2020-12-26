import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { ProjectViews } from '.';

describe('Project Views component', () => {
  it('should render', async () => {
    const { container } = render(<ProjectViews />);
    await waitFor(() => expect(container.firstChild).toMatchSnapshot());
  });
});
