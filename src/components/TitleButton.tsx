import React from 'react';
import './TitleButton.css';
interface Props {
  title: string;
  onClick: () => void;
}

const TitleButton: React.FC<Props> = ({title, onClick}) => {
  const w = document.documentElement.clientWidth;
  const fontSize = Math.min(Math.ceil(14 + (w - 375) / 40), 14);
  return (
      <div className="title-button-container ball-scale" onClick={onClick}>
        <div className="border1" />
        <div className="bg" />
        <div className="light1" />
        <div className="light2" />
        <div className="light3" />
        <p className="text" style={{fontSize}}>{title}</p>
      </div>
  );
};

export default TitleButton;