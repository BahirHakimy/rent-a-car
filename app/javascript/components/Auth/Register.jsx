import React from 'react';
import { register } from '../../utils/auth';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToast } from '../../context/features/toastSlice';

function Register() {
  const [errors, setErrors] = React.useState({ username: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = event.target;

    try {
      await register(username.value, password.value);
      dispatch(addToast('Registeration was successful, You can login.'));
      navigate('/');
    } catch ({ response }) {
      if (response.status === 422) {
        setErrors({
          username: response.data.errors.filter((err) =>
            err.includes('Username')
          )[0],
          password: response.data.errors.filter((err) =>
            err.includes('Password')
          )[0],
        });
      } else {
        dispatch(addToast('Something went wrong.'));
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-slate-50">
      <div className="bg-white shadow-md rounded-md w-96 p-8">
        <h2 className="text-2xl text-center text-lime-600 mb-6">Register</h2>
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
                errors.username ? 'border-red-400' : 'border-lime-400'
              } rounded-md focus:outline-none focus:border-lime-600`}
            />
            <p className="text-sm text-red-600 font-semibold" role="alert">
              {errors.username}
            </p>
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
                errors.password ? 'border-red-400' : 'border-lime-400'
              } rounded-md focus:outline-none focus:border-lime-600`}
            />
            <p className="text-sm text-red-600 font-semibold" role="alert">
              {errors.password}
            </p>
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
