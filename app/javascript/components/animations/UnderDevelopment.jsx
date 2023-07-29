import React from 'react';
import Lottie from 'lottie-react';
import animation from './json/under_constraction.json';

function UnderDevelopment({ autoplay = true, loop = false }) {
  return (
    <Lottie
      animationData={animation}
      options={{ autoplay: autoplay, loop: loop }}
    />
  );
}

export default UnderDevelopment;
