import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import AuthNavbar from './Auth/AuthNavbar';
import { useSelector } from 'react-redux';
import ToastContainer from './shared/ToastContainer';

function Layout() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="flex justify-start items-center">
      <ToastContainer />

      {user ? <AuthNavbar /> : <Navbar />}
      <Outlet />
    </div>
  );
}

export default Layout;
