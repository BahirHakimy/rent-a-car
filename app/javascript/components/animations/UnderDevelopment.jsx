import React from 'react';
import Lottie from 'lottie-react';
import animation from './json/under_constraction.json';

function UnderDevelopment({ ...options }) {
  return <Lottie animationData={animation} loop={true} {...options} />;
}

export default UnderDevelopment;
