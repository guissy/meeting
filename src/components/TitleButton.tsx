import React from 'react';
import './TitleButton.css';
interface Props {
  title: string;
  onClick: () => void;
}

const TitleButton: React.FC<Props> = ({title, onClick}) => {
  // transform: scale(calc(100% / 375px));
  // const w = document.documentElement.clientWidth;
  // const scale = `scale(${w/375})`;
  return (
      <div className="title-button-container ball-scale" onClick={onClick}>
        {title}
      </div>
  );
};

export default TitleButton;