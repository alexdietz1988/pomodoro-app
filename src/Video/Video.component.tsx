import * as Styled from './Video.styles';
import { videos } from './Video.data';

const getRandomUrl = () =>
  videos[Math.floor(Math.random() * videos.length)].url;

const Video = () => (
  <>
    <Styled.Iframe src={getRandomUrl()} allowFullScreen />
  </>
);

export default Video;
