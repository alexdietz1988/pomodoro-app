import { useState, useRef, useEffect } from 'react';
import * as Styled from './Video.styles';
import { musicVideos, whiteNoiseVideos } from './Video.data';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaRandom, FaHandPointRight } from 'react-icons/fa';

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
  const [openSelectVideo, setOpenSelectVideo] = useState(false);
  const videoOptionsDialogRef = useRef<HTMLDialogElement>(null);
  const videos = videoType === 'whiteNoise' ? whiteNoiseVideos : musicVideos;

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
      {buttonVideoType === 'music' ? 'Music' : 'Noise'}
    </Button>
  );

  useEffect(() => {
    if (openSelectVideo && videoOptionsDialogRef.current) {
      videoOptionsDialogRef.current.showModal();
    }
  }, [openSelectVideo]);

  return (
    <Styled.Container>
      <Styled.Iframe
        src={videoUrl}
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <ButtonGroup>
        {videoTypeButton('music')}
        {videoTypeButton('whiteNoise')}
      </ButtonGroup>
      <Styled.SwitchVideoButtons>
        <Button
          variant="outline-light"
          size="sm"
          onClick={() => setVideoUrl(getRandomUrl(videoType, videoUrl))}
        >
          <FaRandom />
          <span> Random</span>
        </Button>
        <Button
          variant="outline-light"
          size="sm"
          onClick={() => setOpenSelectVideo(true)}
        >
          <FaHandPointRight />
          <span> Select</span>
        </Button>
      </Styled.SwitchVideoButtons>
      {openSelectVideo && (
        <Styled.VideoOptionsDialog ref={videoOptionsDialogRef}>
          {videos.map((video: Video) => (
            <button
              onClick={() => {
                setVideoUrl(video.url);
                setOpenSelectVideo(false);
              }}
            >
              {video.channel} | {video.title}
            </button>
          ))}
          <Styled.DialogCloseButton onClick={() => setOpenSelectVideo(false)}>
            x
          </Styled.DialogCloseButton>
        </Styled.VideoOptionsDialog>
      )}
    </Styled.Container>
  );
};

export default Video;
