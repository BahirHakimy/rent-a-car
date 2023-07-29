import React from 'react';
import Lottie from 'lottie-react';
import animation from './json/not_found.json';

function NotFound({ autoplay = true, loop = false }) {
  return (
    <Lottie
      animationData={animation}
      options={{ autoplay: autoplay, loop: loop }}
    />
  );
}

export default NotFound;
