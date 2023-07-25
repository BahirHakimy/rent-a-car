// Entry point for the build script in your package.json
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  const user = JSON.parse(localStorage.getItem('token'));

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            {user ? (
              <>
                <Route
                  path=""
                  element={<h1 className="bg-blue-400">Hello Home</h1>}
                />
                <Route
                  path="reserve"
                  element={<h1 className="bg-blue-400">Reserve a car</h1>}
                />
                <Route
                  path="reservations"
                  element={<h1 className="bg-blue-400">Your Reservations</h1>}
                />
                <Route
                  path="add-car"
                  element={<h1 className="bg-blue-400">Add New Car</h1>}
                />
                <Route
                  path="delete-car"
                  element={<h1 className="bg-blue-400">Delete Cars</h1>}
                />
              </>
            ) : (
              <>
                <Route path="" element={<Login />} />
                <Route path="signup" element={<Register />} />
              </>
            )}
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
