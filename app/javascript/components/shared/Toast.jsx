import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { clear } from '../../context/features/toastSlice';

const Toast = ({ message }) => {
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const toast = ref.current;
    setTimeout(() => {
      toast.classList.add('slideOut');
      setTimeout(() => {
        toast.remove();
      }, 500);
      dispatch(clear());
    }, 5000);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed bottom-10 right-4 p-4 bg-lime-800 text-white rounded-md shadow-lg slideIn"
      id="toast"
    >
      {message}
    </div>
  );
};

export default Toast;
