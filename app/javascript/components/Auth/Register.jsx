import React from 'react';

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-slate-50">
      <div className="bg-white shadow-md rounded-md w-96 p-8">
        <h2 className="text-2xl text-center text-lime-600 mb-6">Register</h2>
        <form action="#" method="post">
          <div className="mb-4">
            <label htmlFor="username" className="text-lime-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full px-4 py-2 border border-lime-400 rounded-md focus:outline-none focus:border-lime-600"
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
              className="w-full px-4 py-2 border border-lime-400 rounded-md focus:outline-none focus:border-lime-600"
            />
          </div>
          <button
            type="submit"
            className="bg-lime-600 text-white px-4 py-2 rounded-md w-full hover:bg-lime-700 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
