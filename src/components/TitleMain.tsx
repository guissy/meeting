import React from 'react';
import h1_bg from '../assets/h1_bg2.png';
import h1_txt from '../assets/h1_txt.png';
import './TitleMain.css';

interface Props {
}

const TitleMain: React.FC<Props> = ({}) => {
  return (
      <div className="title-main">
        {/*<img src={h1_bg} className="h1-bg" />*/}
        <img src={h1_txt} className="h1-txt" />
      </div>
  );
};

export default TitleMain;