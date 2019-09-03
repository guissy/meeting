import React from 'react';
import './TitleBox.css';
interface Props {
  img: string;
  style?: any;
}

const TitleBox: React.FC<Props> = ({img, style = {}}) => {
  return (
      <div className="title-box-container" style={style}>
        <div className="title-border">
          <div className="title-top"/>
          <div className="title-bottom"/>
          <div className="title-left"/>
          <div className="title-right"/>
        </div>
        <img className="title-text" src={img} />
      </div>
  );
};

export default TitleBox;