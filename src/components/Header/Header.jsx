import './Header.css'
import logo from '/pictures/copy-hao.png'
import React, { useEffect, useRef, useState } from "react";
import playIcon from "/icons/play.png";
import pauseIcon from "/icons/pause.png";
import { useNavigate } from 'react-router-dom'

export default function Header() {
    return (
      <>
        <div className="headerArea">
          <Logo></Logo>
          <MusicPlayer></MusicPlayer>
          <MenuOptions></MenuOptions>
        </div>
      </>
    )
}

function Logo(){
  return(
    <div className="logoContainer">
      {/* <div className="blank1"></div> */}
      <img src={logo} alt="logo" />
      {/* <div className="blank2"></div> */}
    </div>
  )
}

function MusicPlayer(){
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.36;
    }
  }, []);

  const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  }

  return(
    <div className="musicPlayerContainer">
      <audio ref={audioRef} src="/music/Fly Me to the Moon.mp3" />
      <button onClick={togglePlay} className="music-player-icon">
        <img 
          src={isPlaying ? pauseIcon : playIcon} 
          alt="Music Icon" 
          className="music-icon"
        />
      </button>
    </div>
  )
}

function MenuOptions(){
  const options = ['PORTFOLIO', 'GAMES', 'BLOGS', 'ART SPACE'];
  const navigate = useNavigate()

  return(
    <div className='optionsContainer'>
      {options.map((option, index) => (
        <button 
          key={index} 
          className='singleOption'
          onClick={() => {
            if(option === 'PORTFOLIO') navigate('/')
            else if(option === 'GAMES') navigate('/games')
            else if(option === 'BLOGS') navigate('/blogs')
            else if(option === 'ART SPACE') navigate('/artspace')
          }}
          >
          {option}
        </button>
      ))}
    </div>
  )
}