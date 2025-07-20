import { useState } from 'react';
import * as Styled from './Video.styles';
import { videos } from './Video.data';

const getRandomUrl = (url?: string) => {
  const newUrl = videos[Math.floor(Math.random() * videos.length)].url;
  if (newUrl === url) {
    return getRandomUrl(url);
  }
  return newUrl;
};

const Video = () => {
  const [videoUrl, setVideoUrl] = useState(getRandomUrl());

  return (
    <>
      <Styled.Iframe src={videoUrl} allowFullScreen />
      <button onClick={() => setVideoUrl(getRandomUrl(videoUrl))}>
        Switch Video
      </button>
    </>
  );
};

export default Video;
