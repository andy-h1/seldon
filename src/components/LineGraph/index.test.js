import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { LineGraph } from '.';

describe('Line Graph component', () => {
  it('should render', async () => {
    const { container } = render(<LineGraph />);
    await waitFor(() => expect(container.firstChild).toMatchSnapshot());
  });
});
