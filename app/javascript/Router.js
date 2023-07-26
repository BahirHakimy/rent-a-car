import React from 'react';
import { Route, Routes } from 'react-router';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Layout from './components/Layout';
import { useSelector } from 'react-redux';
import ToastContainer from './components/shared/ToastContainer';

function Router(props) {
  const { user } = useSelector((state) => state.user);

  return (
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
  );
}

export default Router;
