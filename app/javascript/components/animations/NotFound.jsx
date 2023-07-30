import React from 'react';
import Lottie from 'lottie-react';
import animation from './json/not_found.json';

function NotFound({ ...options }) {
  return <Lottie animationData={animation} loop={true} {...options} />;
}

export default NotFound;
