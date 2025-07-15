import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter.jsx';

test('increments count', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Add'));
  expect(screen.getByText('1')).toBeInTheDocument();
}); 