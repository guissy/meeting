import React from 'react';
import './TitleBox.css';
interface Props {
  img: string;
  style?: any;
  className?: any;
}

const TitleBox: React.FC<Props> = ({img, style = {}, className = ""}) => {
  return (
      <div className={"title-box-container "+className} style={style}>
        <div className="title-border">
          <div className="title-top"/>
          <div className="title-bottom"/>
          <div className="title-left"/>
          <div className="title-right"/>
        </div>
        <img className="title-text" src={img} alt="2019 main title" />
      </div>
  );
};

export default TitleBox;