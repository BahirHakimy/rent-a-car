import React from 'react';
import Logo from './../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaGithub,
  FaMedium,
  FaUserPlus,
} from 'react-icons/fa';

import { RiLoginCircleFill } from 'react-icons/ri';

function Navbar(props) {
  const links = [
    { to: '', label: 'Login', Icon: RiLoginCircleFill },
    { to: 'signup', label: 'Sign Up', Icon: FaUserPlus },
  ];
  return (
    <div className="flex flex-col justify-center md:justify-start items-center md:items-start ml-2 md:m-0 md:pl-4 border rounded-full md:rounded-none shadow-md py-4 md:border-r h-max md:h-screen">
      <Link
        to="/"
        className="fixed md:hidden top-2 left-2 border shadow-md rounded-full"
      >
        <img src={Logo} alt="Logo" width="45px" height="45px" />
      </Link>
      <Link to="/" className="hidden md:block">
        <img src={Logo} alt="Logo" width="150px" height="150px" />
      </Link>
      <ul className="w-full">
        {links.map(({ to, label, Icon }) => (
          <li key={label}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'bg-lime-500 text-white'
                    : 'text-slate-800 hover:bg-slate-100 active:bg-slate-200'
                } flex justify-between items-center px-3 py-2 text-xl w-full font-semibold`
              }
            >
              <span className="hidden md:block whitespace-nowrap">{label}</span>
              <Icon />
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex justify-center items-center w-full mt-auto mb-4 pr-4">
        <a
          href="https://www.twitter.com"
          className="mx-1 text-slate-800 hover:scale-150 hover:text-sky-400 transition-transform"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.facebook.com"
          className="mx-1 text-slate-800 hover:scale-150 hover:text-blue-500 transition-transform"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.google.com"
          className="mx-1 text-slate-800 hover:scale-150 hover:text-red-400 transition-transform"
        >
          <FaGoogle />
        </a>
        <a
          href="https://www.medium.com"
          className="mx-1 text-slate-800 hover:scale-150 hover:text-slate-900 transition-transform"
        >
          <FaMedium />
        </a>
        <a
          href="https://www.github.com"
          className="mx-1 text-slate-800 hover:scale-150 hover:text-black transition-transform"
        >
          <FaGithub />
        </a>
      </ul>
      <p className="text-slate-700 text-sm font-semibold mx-auto pr-4 pb-6 whitespace-nowrap hidden md:block">
        &copy; 2023 @Microverse
      </p>
    </div>
  );
}

export default Navbar;
