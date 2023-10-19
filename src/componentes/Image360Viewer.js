import React from 'react';

const Image360Viewer = () => {
  return (
    <a-scene>
      <img id="panorama" src="/my-app/DJI_0001-Pano.jpg" crossOrigin="anonymous" />
      <a-sky src="#panorama" rotation="0 -90 0"></a-sky>
    </a-scene>
  );
}

export default Image360Viewer;
