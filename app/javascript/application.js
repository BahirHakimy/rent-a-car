// Entry point for the build script in your package.json
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './context/store';
import Router from './Router';

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
