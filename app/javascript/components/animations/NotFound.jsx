import React from 'react';
import Lottie from 'react-lottie';
import animation from './json/not_found.json';

function NotFound({ autoplay = true, loop = false }) {
  return (
    <Lottie
      options={{ animationData: animation, autoplay: autoplay, loop: loop }}
    />
  );
}

export default NotFound;
