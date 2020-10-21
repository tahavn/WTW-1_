import React from 'react';
import './style.css';

const Loading = () => {
  return (
    <div className="loader">
      <div className="l_main">
        <div className="l_square">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="l_square">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="l_square">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="l_square">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
