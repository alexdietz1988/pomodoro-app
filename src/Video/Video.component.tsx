import { useState, useRef, useEffect } from 'react';
import * as Styled from './Video.styles';
import { musicVideos, whiteNoiseVideos } from './Video.data';
import { FaRandom, FaHandPointRight, FaPlus, FaFan } from 'react-icons/fa';
import { IoIosClose, IoIosMusicalNotes } from 'react-icons/io';

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
  const [showVideoInput, setShowVideoInput] = useState(false);
  const videoOptionsDialogRef = useRef<HTMLDialogElement>(null);
  const videos = videoType === 'whiteNoise' ? whiteNoiseVideos : musicVideos;

  const handleSwitchVideoType = (newVideoType: VideoType) => {
    setVideoType(newVideoType);
    setVideoUrl(getRandomUrl(newVideoType, videoUrl));
  };

  useEffect(() => {
    if (openSelectVideo && videoOptionsDialogRef.current) {
      videoOptionsDialogRef.current.showModal();
      document.body.style.opacity = '0.25';
    }
    if (!openSelectVideo) {
      document.body.style.opacity = '1';
    }
  }, [openSelectVideo]);

  return (
    <Styled.Container>
      <Styled.Iframe
        src={videoUrl}
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <Styled.Buttons>
        <div>
          <Styled.VideoTypeButton
            onClick={() => handleSwitchVideoType('music')}
            isActive={videoType === 'music'}
          >
            <IoIosMusicalNotes />
          </Styled.VideoTypeButton>
          <Styled.VideoTypeButton
            onClick={() => handleSwitchVideoType('whiteNoise')}
            isActive={videoType === 'whiteNoise'}
          >
            <FaFan />
          </Styled.VideoTypeButton>
        </div>

        <Styled.SwitchVideoButtons>
          <button
            onClick={() => setVideoUrl(getRandomUrl(videoType, videoUrl))}
          >
            <FaRandom />
          </button>
          <button onClick={() => setOpenSelectVideo(true)}>
            <FaHandPointRight />
          </button>
          <button onClick={() => setShowVideoInput((prev) => !prev)}>
            <FaPlus />
          </button>
        </Styled.SwitchVideoButtons>
      </Styled.Buttons>
      {showVideoInput && (
        <>
          <Styled.VideoInputForm
            onSubmit={(e) => {
              e.preventDefault();
              const videoUrl = (e.target as HTMLFormElement).videoUrl.value;
              const videoId = videoUrl.slice(-11);
              if (!videoId) return;
              const newUrl = `https://www.youtube.com/embed/${videoId}`;
              setVideoUrl(newUrl);
              setShowVideoInput(false);
            }}
          >
            <input name="videoUrl" placeholder="Paste YouTube url" />
            <button type="submit">Submit</button>
          </Styled.VideoInputForm>
          <Styled.VideoInputCloseButton
            onClick={() => setShowVideoInput(false)}
          >
            Never Mind
          </Styled.VideoInputCloseButton>
        </>
      )}
      {openSelectVideo && (
        <Styled.VideoOptionsDialog ref={videoOptionsDialogRef}>
          <Styled.VideoOptions>
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
          </Styled.VideoOptions>
          <Styled.DialogCloseButton onClick={() => setOpenSelectVideo(false)}>
            <IoIosClose />
            <span>Close</span>
          </Styled.DialogCloseButton>
        </Styled.VideoOptionsDialog>
      )}
    </Styled.Container>
  );
};

export default Video;
