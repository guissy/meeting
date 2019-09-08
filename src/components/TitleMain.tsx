import React from 'react';
import h1_txt from '../assets/h1_txt.png';
import './TitleMain.css';

const TitleMain: React.FC = () => {
  return (
    <>
      <div className="title-main-margin"/>
      <div className="title-main">
        <img src={h1_txt} className="h1-txt" alt="title" />
      </div>
    </>
  );
};

export default TitleMain;