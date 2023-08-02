import React from 'react';
import Lottie from 'lottie-react';
import animation from './json/car.json';

function Loading({ ...options }) {
  return <Lottie animationData={animation} loop={false} {...options} />;
}

export default Loading;
