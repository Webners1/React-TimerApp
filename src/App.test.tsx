import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello world/i);
  expect(linkElement).toBeInTheDocument();
});
test("home", () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
test("setting", () => {
  render(<App />);
  const linkElement = screen.getByText(/setting/i);
  expect(linkElement).toBeInTheDocument();
});
