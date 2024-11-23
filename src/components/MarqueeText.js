import React from 'react';
import './MarqueeText.css';

const MarqueeText = ({ text }) => {
  return (
    <div className="marquee">
      <div className="marquee-text">
        {text}
      </div>
    </div>
  );
};

export default MarqueeText;