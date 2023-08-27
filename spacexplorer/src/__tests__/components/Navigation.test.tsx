import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../../components/Navigation';

test('renders app name', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const h2Element = screen.getByRole('heading', { level: 2 });
  expect(h2Element).toBeInTheDocument();
});

test('renders Capsules link', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const text = screen.getByText('Capsules');
  expect(text).toBeInTheDocument();
});
