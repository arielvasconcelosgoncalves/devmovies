import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { SearchProvider } from './context/SearchContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </SearchProvider>
  </StrictMode>,
);
