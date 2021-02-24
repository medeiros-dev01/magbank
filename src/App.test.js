import React from "react";
import { render } from '@testing-library/react';
import App from './App';

test('renders magbank header', () => {
  const { getByText} = render(<app />);
  const el = getByText(/magbank/i);
  expect(el).toBeInTheDocument();
});
