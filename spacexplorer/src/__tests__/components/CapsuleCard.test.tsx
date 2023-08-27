import { render, screen } from '@testing-library/react';
import CapsuleCard from '../../components/CapsuleCard';
import { data } from '../../sampleData';

test('renders capsule serial number', () => {
  render(<CapsuleCard capsule={data[0]} />);
  const h2Element = screen.getByRole('heading', { level: 2 });
  expect(h2Element).toBeInTheDocument();
});

test('renders capsule details', () => {
  render(<CapsuleCard capsule={data[0]} />);
  const paraElement = screen.getByRole('paragraph');
  expect(paraElement).toBeInTheDocument();
});

test('renders capsule status', () => {
  render(<CapsuleCard capsule={data[0]} />);
  const span = screen.getByText(data[0].status);
  expect(span).toBeInTheDocument();
});

test('renders capsule type', () => {
  render(<CapsuleCard capsule={data[0]} />);
  const span = screen.getByText(data[0].type);
  expect(span).toBeInTheDocument();
});
