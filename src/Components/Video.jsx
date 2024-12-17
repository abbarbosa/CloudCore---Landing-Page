import React from 'react';
import ReactPlayer from 'react-player';

const VideoComponent = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=W6ncko-kDgw"
      width="1040px"
      height="660px"
      controls
    />
  );
};

export default VideoComponent;
