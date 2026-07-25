import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./Structure/components/ThreeScene/ThreeScene', () => () => <div data-testid="three-scene" />);

test('renders the modern ePathshala home experience', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /every school day, beautifully connected/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /enter your workspace/i })).toHaveAttribute('href', '/login');
  expect(screen.getByTestId('three-scene')).toBeInTheDocument();
});
