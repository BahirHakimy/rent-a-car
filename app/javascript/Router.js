import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from './components/Layout';
import { Login, Register } from './components/Auth';
import Home from './components/cars/Home';
import { Details, AddCar, DeleteCar } from './components/cars';
import { NotFound, UnderDevelopment } from './components/animations';

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
                <h1 className="h-screen w-full flex justify-center items-center">
                  <UnderDevelopment loop={true} />
                </h1>
              }
            />
            <Route
              path="reservations"
              element={
                <h1 className="h-screen w-full flex justify-center items-center">
                  <UnderDevelopment loop={true} />
                </h1>
              }
            />
            <Route path="add-car" element={<AddCar />} />
            <Route path="delete-car" element={<DeleteCar />} />
            <Route path="/" element={<Navigate to={'cars'} />} />
          </>
        ) : (
          <>
            <Route path="" element={<Login />} />
            <Route path="signup" element={<Register />} />
          </>
        )}
        <Route
          path="*"
          element={
            <h1 className="h-screen w-full flex flex-col justify-center items-center">
              <div className="max-h-screen overflow-hidden flex justify-center items-center">
                <NotFound loop={true} />
              </div>
              <Link className="text-sky-500 underline pb-20" to={'/'}>
                Go Back Home
              </Link>
            </h1>
          }
        />
      </Route>
    </Routes>
  );
}

export default Router;
