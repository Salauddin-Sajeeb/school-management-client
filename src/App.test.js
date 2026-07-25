import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./Structure/components/ThreeScene/ThreeScene', () => () => <div data-testid="three-scene" />);

test('renders the modern school sign-in experience', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /sign in to your school/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/user id, email or phone/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /continue/i })).toBeInTheDocument();
});
