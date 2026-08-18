import { render, screen } from '@testing-library/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

test('renders the application heading', () => {
  render(
    <GoogleOAuthProvider clientId="test-client-id">
      <App />
    </GoogleOAuthProvider>
  );

  expect(screen.getByRole('heading', { name: /document sharing app/i }))
    .toBeInTheDocument();
});
