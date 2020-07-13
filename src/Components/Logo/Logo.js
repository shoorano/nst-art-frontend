import React from 'react';
import Tilt from 'react-tilt'
import NST from './logo.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className='ma4 mt0 dib flex-wrap'>
    <Tilt className="Tilt" options={{ max : 60 }} style={{ height: 110, width: 110 }} >
      <div className="Tilt-inner pa3">
        <p>NST</p>
        <img src={NST} alt='Brush'/>
        <p>ART</p>
      </div>
    </Tilt>
    </div>
  );
}

export default Logo;
