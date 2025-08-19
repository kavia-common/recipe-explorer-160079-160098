import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import App from './App';

test('renders header brand', () => {
  render(
    <BrowserRouter>
      <SearchProvider>
        <App />
      </SearchProvider>
    </BrowserRouter>
  );
  const brand = screen.getByText(/recipe explorer/i);
  expect(brand).toBeInTheDocument();
});
