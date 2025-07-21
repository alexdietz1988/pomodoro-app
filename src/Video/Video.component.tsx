import { useState } from 'react';
import * as Styled from './Video.styles';
import { musicVideos, whiteNoiseVideos } from './Video.data';

interface Video {
  url: string;
  channel?: string;
  title?: string;
}

type VideoType = 'music' | 'whiteNoise';

const getRandomUrl = (videoType: VideoType, url?: string) => {
  const videos = videoType === 'whiteNoise' ? whiteNoiseVideos : musicVideos;
  const newUrl = videos[Math.floor(Math.random() * videos.length)].url;
  if (newUrl === url) {
    return getRandomUrl(videoType, url);
  }
  return newUrl;
};

const Video = () => {
  const [videoType, setVideoType] = useState<VideoType>('music');
  const [videoUrl, setVideoUrl] = useState(getRandomUrl('music'));

  const handleSwitchVideoType = () => {
    const newVideoType = videoType === 'music' ? 'whiteNoise' : 'music';
    setVideoType(newVideoType);
    setVideoUrl(getRandomUrl(newVideoType, videoUrl));
  };

  return (
    <>
      <Styled.Iframe src={videoUrl} allowFullScreen />
      <button onClick={() => setVideoUrl(getRandomUrl(videoType, videoUrl))}>
        Switch Video
      </button>
      <button onClick={handleSwitchVideoType}>
        Switch to {videoType === 'music' ? 'White Noise' : 'Music'}
      </button>
    </>
  );
};

export default Video;
