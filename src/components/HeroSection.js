import React from 'react';
import '../App.css'
import './HeroSection.css';



function HeroSection() {
    return (
        <div className='hero-container'>
           <video src='/Portfolio/videos/globe.mp4' autoPlay muted/>
           <h1> Fannie Barskhian</h1>
           <div className="profile-pic">
               <img src="/Portfolio/images/zoom.jpg" alt=""></img>
           </div>
           <p> UC Berkeley Computer Science '23 | NASA JPL Academic Part Time - Radiation Effects</p> 
        </div>
    )
}

export default HeroSection
