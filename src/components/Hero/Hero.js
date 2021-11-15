import React, { useRef, useState } from 'react';
import video from '../../assets/code_video.mp4';
import DropDown from '../../components/DropDown/DropDown';
import './Hero.css';

const Hero = () => {

  const [play, setPlay] = useState(true)
  const vidRef = useRef(null);

  const handleVideo = () => {
    if(!play) {
      vidRef.current.play();
      return setPlay(true);
    }
    vidRef.current.pause();
    setPlay(false);
  }

  return (
    <div className="hero-container">
      <video autoPlay muted loop id="codeVideo" ref={vidRef}>
        <source src={video} type="video/mp4" />
      </video>
      <h1> Welcome Wanderer of the Internet </h1>
      <p> To pause or play video click da button </p>
      <button className="video-btn" onClick={handleVideo}>
      { play ? 'Pause' : 'Play' }
      </button>
      <DropDown />
    </div>
  );
}

export default Hero;
