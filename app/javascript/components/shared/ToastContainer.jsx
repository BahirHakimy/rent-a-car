import React from 'react';
import { useSelector } from 'react-redux';
import Toast from './Toast';

function ToastContainer(props) {
  const toast = useSelector((state) => state.toast);
  return (
    <div>
      {toast.toasts.map((message) => (
        <Toast key={message} message={message} />
      ))}
    </div>
  );
}

export default ToastContainer;
