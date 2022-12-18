import { render, screen } from '@testing-library/react';
import App from '../../App';

test('Prueba', () => {
  render(<App />);
  const linkElement = screen.getByText(/prueba/i);
  expect(linkElement).toBeInTheDocument();
});
