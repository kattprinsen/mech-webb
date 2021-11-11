import React, { useState, useRef } from 'react';
import './Videobar.css';

const Videobar = () => {

  const [playing, isPlaying] = useState(false);
  const videoBar = useRef(null);
  const playCircle = useRef(null);

  const handleVideoBar = () => {

    if(!playing){
      isPlaying(true);
    }
    
    let width = 1;
    let id = setInterval(frame, 10);

    function frame() {
      if(width >= 100) {
        clearInterval(id);
      }

      width++;
      videoBar.current.style.width = width + '%';
    }
  }

  return (
    <div className="videobar">
      <div className="videobar-playing" ref={videoBar}>
        <div className="videobar-play-btn" onClick={handleVideoBar}>
          <div className={playing ? 'videobar-circle-play' : 'videobar-circle'} ref={playCircle}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videobar;
