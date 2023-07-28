import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from './components/Layout';
import { Login, Register } from './components/Auth';
import Home from './components/cars/Home';
import { Details, AddCar } from './components/cars';

function Router() {
  const { user } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route path="" element={<Layout />}>
        {user ? (
          <>
            <Route path="cars" element={<Home />} />
            <Route path="cars/:car_id" element={<Details />} />
            <Route
              path="reserve"
              element={
                <h1 className="h-screen w-full bg-blue-400">Reserve a car</h1>
              }
            />
            <Route
              path="reservations"
              element={
                <h1 className="h-screen w-full bg-blue-400">
                  Your Reservations
                </h1>
              }
            />
            <Route path="add-car" element={<AddCar />} />
            <Route
              path="delete-car"
              element={
                <h1 className="h-screen w-full bg-blue-400">Delete Cars</h1>
              }
            />
            <Route path="/" element={<Navigate to={'cars'} />} />
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
