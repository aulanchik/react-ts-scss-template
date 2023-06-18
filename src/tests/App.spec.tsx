import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  render(<App />);
  expect(screen.getByTestId('app')).toBeInTheDocument();
});
