import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaGithub,
  FaMedium,
  FaUser,
  FaPowerOff,
} from 'react-icons/fa';
import {
  AiFillCar,
  AiFillProfile,
  AiFillPlusCircle,
  AiFillDelete,
} from 'react-icons/ai';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import Logo from './../../images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../context/features/userSlice';
import { addToast } from '../../context/features/toastSlice';

function AuthNavbar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const links = [
    { to: 'cars', label: 'Cars', Icon: AiFillCar },
    { to: 'reserve', label: 'Reserve', Icon: BsFillJournalBookmarkFill },
    { to: 'reservations', label: 'My Reservations', Icon: AiFillProfile },
    { to: 'add-car', label: 'Add Car', Icon: AiFillPlusCircle },
    { to: 'delete-car', label: 'Delete Car', Icon: AiFillDelete },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    dispatch(addToast('Logged out!'));
  };
  return (
    <div className="flex flex-col justify-center md:justify-start items-center md:items-start ml-2 md:m-0 md:pl-4 border rounded-full md:rounded-none shadow-md py-4 md:border-r h-max md:h-screen">
      <Link
        to="/cars"
        className="fixed md:hidden top-2 left-2 border shadow-md rounded-full"
      >
        <img src={Logo} alt="Logo" width="45px" height="45px" />
      </Link>
      <Link to="/cars" className="hidden md:block">
        <img src={Logo} alt="Logo" width="150px" height="150px" />
      </Link>
      <div
        title={user.username}
        className="text-sky-600 px-3 py-2 flex justify-between items-center text-xl w-full font-semibold"
      >
        <span className="hidden md:block capitalize">{user.username}</span>
        <FaUser />
      </div>
      <ul className="w-full">
        <li>
          {links.map(({ to, label, Icon }) => (
            <NavLink
              to={to}
              key={label}
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
          ))}
        </li>
      </ul>
      <div
        onClick={handleLogout}
        className="rounded-tl-xl rounded-bl-xl text-slate-700 px-3 py-2 flex justify-between items-center text-xl w-full font-semibold hover:bg-slate-100 cursor-pointer active:bg-slate-200"
      >
        <span className="hidden md:block"> Logout</span>
        <FaPowerOff />
      </div>
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
      <p className="text-slate-700 text-sm font-semibold mx-auto pr-4 pb-6 hidden md:block">
        &copy; 2023 Microverse
      </p>
    </div>
  );
}

export default AuthNavbar;
