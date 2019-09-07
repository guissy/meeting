import React, { useEffect } from 'react';
import './BodyBox.css';
import playIcon from '../assets/video-play.svg';

interface Props {
  content: string;
}

let timer: any;
/** 峰会简介 */
const BodyBox: React.FC<Props> = ({ content }) => {
  const ref = React.useRef<HTMLVideoElement>(null as unknown as HTMLVideoElement);
  const [playing, setPlaying] = React.useState(false);
  const w = document.documentElement.clientWidth;
  // const fontSize = 12; //Math.min(Math.ceil(12 + (w - 375) / 30), 28);
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
        <video width="100%" autoPlay={false} loop={true} controls={false} playsInline ref={ref} preload="auto"
               onClick={() => {
                 ref.current.pause();
                 setPlaying(false);
               }}
               onEnded={() => {
                 setPlaying(false);
               }}>
          <source src="video1.mp4" type="video/mp4"/>
        </video>
        <div className="line" style={{width: rate+'%'}}/>
        {!playing && <a onClick={toPlay}><img src={playIcon} alt="play"/></a>}
      </div>
    </div>
  );
};

export default BodyBox;