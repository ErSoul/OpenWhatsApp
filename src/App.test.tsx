import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders front page', () => {
  render(<App />);
  const linkElement = screen.getByText(/open in whatsapp/i);
  expect(linkElement).toBeInTheDocument();
});
