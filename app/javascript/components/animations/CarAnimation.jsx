import React from 'react';
import Lottie from 'react-lottie';
import animation from './json/car.json';

function Loading({ height = 100, width = 100, autoplay = true, loop = false }) {
  return (
    <Lottie
      height={height}
      width={width}
      options={{ animationData: animation, autoplay: autoplay, loop: loop }}
    />
  );
}

export default Loading;
