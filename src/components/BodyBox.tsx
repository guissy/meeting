import React, { useEffect } from 'react';
import './BodyBox.css';
import playIcon from '../assets/video-play.svg';
// @ts-ignore
import videoUrl from '../assets/video1.mp4';

interface Props {
  content: string;
}

let timer: any;
/** 峰会简介 */
const BodyBox: React.FC<Props> = ({ content }) => {
  const ref = React.useRef<HTMLVideoElement>(null as unknown as HTMLVideoElement);
  const [playing, setPlaying] = React.useState(false);
  const [rate, setRate] = React.useState(0);
  const toPlay = () => {
    ref.current.play();
    setPlaying(true);
  }
  useEffect(() => {
    if (playing) {
      timer = setInterval(() => {
        setRate(Math.ceil(ref.current.currentTime/ref.current.duration*100));
      });
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    }
  }, [playing]);
  return (
    <div className="body-box">
      <p>
        {content.split('\n').map(v => v.trim()).map((v, i) => (
          <span key={i}>
            {v}
          </span>
        ))}
      </p>
      <div className="video-wrap">
        <video width="100%" autoPlay={false} loop={true} controls={false}
               playsInline={true}
               ref={ref} preload="auto"
               x5-video-player-type="h5" /*启用H5播放器,是wechat安卓版特性*/
               x5-video-orientation="landscape" /*播放器的方向，landscape横屏，portraint竖屏，默认值为竖屏*/
               x5-video-player-fullscreen="true"
               onClick={() => {
                 ref.current.pause();
                 setPlaying(false);
               }}
               onEnded={() => {
                 setPlaying(false);
               }}>
          <source src={videoUrl} type="video/mp4"/>
        </video>
        <div className="line" style={{width: rate+'%'}}/>
        {!playing && <button onClick={toPlay}><img src={playIcon} alt="play"/></button>}
      </div>
    </div>
  );
};

export default BodyBox;