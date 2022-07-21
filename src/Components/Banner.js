import React from 'react'
import '../App.css'
import Logo1 from './laptop.jpg';
import Button  from './Button';
import './Banner.css'
function Banner() {
  return (
    <div className='banner-container'>
        <img src={Logo1} alt="" className='image'/>
        {/* <video src='../../video.mp4' autoPlay loop muted/>       */}
        <h1>THE ADVENTURE AWAITS!</h1>
        <p>What are you doing today? dive in!</p>
        <div className="banner-btns">
          <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
        </div>
    </div>
  )
}

export default Banner
