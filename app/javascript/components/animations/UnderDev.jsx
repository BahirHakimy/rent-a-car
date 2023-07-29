import React from 'react';
import Lottie from 'react-lottie';
import animation from './json/under_constraction.json';

function UnderDevelopment({ autoplay = true, loop = false }) {
  return (
    <Lottie
      options={{ animationData: animation, autoplay: autoplay, loop: loop }}
    />
  );
}

export default UnderDevelopment;
