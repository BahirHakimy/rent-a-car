import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="flex justify-start items-center">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
