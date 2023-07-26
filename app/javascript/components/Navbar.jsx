import React from 'react';
import Logo from './../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaGithub,
  FaMedium,
} from 'react-icons/fa';

function Navbar(props) {
  const links = [
    { to: '', label: 'Login' },
    { to: 'signup', label: 'Sign Up' },
  ];
  return (
    <div className="flex flex-col justify-start items-start pl-4 border-r h-screen min-w-48">
      <Link to="/">
        <img src={Logo} alt="Logo" width="150px" height="150px" />
      </Link>
      <ul className="w-full">
        <li>
          {links.map((link) => (
            <NavLink
              to={link.to}
              key={link.label}
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'bg-lime-500 text-white'
                    : 'text-slate-800 hover:bg-slate-100'
                } px-3 py-2 block text-xl w-full font-semibold`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </li>
      </ul>
      <ul className="flex justify-center items-center w-full mt-auto mb-4 pr-4">
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
      <p className="text-slate-700 text-sm font-semibold mx-auto pr-4 pb-6 whitespace-nowrap">
        &copy; 2023 Microverse
      </p>
    </div>
  );
}

export default Navbar;
