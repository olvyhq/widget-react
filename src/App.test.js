import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app and checks widget button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Announcement Widget/i);
  expect(linkElement).toBeInTheDocument();
});
