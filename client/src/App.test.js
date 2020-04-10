import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Test message render', () => {
  const {getByText} = render(<App />);
  const title = getByText(/Players List/i)
  expect(title).toBeVisible();
});

test('Test alex render', async () => {
    const {findByText} = render(<App />);
    const name = await findByText(/Alex Morgan/i)
    expect(name).toBeVisible();
});

test('Test megan render', async () => {
  const {findByText} = render(<App />);
  const name = await findByText(/Megan Rapinoe/i)
  expect(name).toBeVisible();
});