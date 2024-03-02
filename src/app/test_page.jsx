import { render, screen } from '@testing-library/react';
import Home from './page';

test('renders the Home component', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});