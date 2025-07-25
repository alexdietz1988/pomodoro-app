import { useState } from 'react';
import * as Styled from './Video.styles';
import { musicVideos, whiteNoiseVideos } from './Video.data';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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

  const handleSwitchVideoType = (newVideoType: VideoType) => {
    setVideoType(newVideoType);
    setVideoUrl(getRandomUrl(newVideoType, videoUrl));
  };

  const videoTypeButton = (buttonVideoType: VideoType) => (
    <Button
      variant={
        videoType === buttonVideoType ? 'secondary' : 'outline-secondary'
      }
      onClick={() => handleSwitchVideoType(buttonVideoType)}
      size="sm"
    >
      {buttonVideoType === 'music' ? 'Music' : 'White Noise'}
    </Button>
  );

  return (
    <>
      <Styled.Iframe
        src={videoUrl}
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />

      <Button
        variant="light"
        size="sm"
        onClick={() => setVideoUrl(getRandomUrl(videoType, videoUrl))}
      >
        Switch Video
      </Button>
      <ButtonGroup>
        {videoTypeButton('music')}
        {videoTypeButton('whiteNoise')}
      </ButtonGroup>
    </>
  );
};

export default Video;
