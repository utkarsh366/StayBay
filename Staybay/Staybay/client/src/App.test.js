import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

test('renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // Wait for the app to render the StayBay logo/text
  const linkElement = screen.getByText(/StayBay/i);
  expect(linkElement).toBeInTheDocument();
});