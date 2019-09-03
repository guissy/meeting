import React from 'react';
import './BodyBox.css';

interface Props {
  content: string;
}

const BodyBox: React.FC<Props> = ({ content }) => {
  return (
    <div className="body-box">
      {content.split('\n').map(v => v.trim()).map((v, i) => (
        <p key={i}>
          {v}
        </p>
      ))}
    </div>
  );
};

export default BodyBox;