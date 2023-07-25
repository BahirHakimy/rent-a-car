import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import AuthNavbar from './Auth/AuthNavbar';

function Layout() {
  const user = JSON.parse(localStorage.getItem('token'));

  return (
    <div className="flex justify-start items-center">
      {user ? <AuthNavbar /> : <Navbar />}
      <Outlet />
    </div>
  );
}

export default Layout;
