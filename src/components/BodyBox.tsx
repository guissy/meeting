import React from 'react';
import './BodyBox.css';

interface Props {
  content: string;
}

const BodyBox: React.FC<Props> = ({ content }) => {
  // calc(12px + (100% - 375px) / 81px);
  const w = document.documentElement.clientWidth;
  const fontSize = Math.min(Math.ceil(12 + (w - 375) / 81), 18);
  return (
    <div className="body-box">
      {content.split('\n').map(v => v.trim()).map((v, i) => (
        <p key={i} style={{ fontSize }}>
          {v}
        </p>
      ))}
    </div>
  );
};

export default BodyBox;