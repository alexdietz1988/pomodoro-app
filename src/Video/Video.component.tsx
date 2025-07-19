import * as Styled from './Video.styles';

const Video = () => (
  <Styled.Iframe
    src="https://www.youtube.com/embed/zh_pECrHHOY"
    title="YouTube video player"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></Styled.Iframe>
);

export default Video;
