import React from 'react';
import './TitleButton.css';
interface Props {
  title: string;
  onClick: () => void;
}

const TitleButton: React.FC<Props> = ({title, onClick}) => {
  return (
      <div className="title-button-container ball-scale" onClick={onClick}>
        {title}
      </div>
  );
};

export default TitleButton;