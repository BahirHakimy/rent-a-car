import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../context/features/userSlice';
import { TbFidgetSpinner } from 'react-icons/tb';
import { addToast } from '../../context/features/toastSlice';
import { CarAnimation } from '../animations';

function Login() {
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = event.target;
    dispatch(
      login({
        username: username.value,
        password: password.value,
        callback: () => dispatch(addToast('Logged In successfully')),
      })
    );
  };
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-slate-50">
      <div className="bg-white shadow-md rounded-md w-96 p-8">
        <CarAnimation height={200} width={200} />
        <form onSubmit={handleSubmit} method="post">
          <div className="mb-4">
            <label htmlFor="username" className="text-lime-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className={`w-full px-4 py-2 border ${
                error ? 'border-red-400' : 'border-lime-400'
              } rounded-md focus:outline-none focus:border-lime-600`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-lime-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className={`w-full px-4 py-2 border ${
                error ? 'border-red-400' : 'border-lime-400'
              } rounded-md focus:outline-none focus:border-lime-600`}
            />
          </div>
          <p className="text-sm text-red-600 font-semibold pb-4" role="alert">
            {error}
          </p>
          {loading ? (
            <div className="px-4 py-2 w-full">
              <TbFidgetSpinner
                size={25}
                className="animate-spin text-sky-500 mx-auto"
              />
            </div>
          ) : (
            <button
              type="submit"
              className="bg-lime-600 text-white px-4 py-2 rounded-md w-full hover:bg-lime-700 transition-colors"
            >
              Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
