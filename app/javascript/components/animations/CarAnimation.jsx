import React from 'react';
import Lottie from 'lottie-react';
import animation from './json/car.json';

function Loading({ autoplay = true, loop = false }) {
  return (
    <Lottie
      animationData={animation}
      options={{ autoplay: autoplay, loop: loop }}
    />
  );
}

export default Loading;
