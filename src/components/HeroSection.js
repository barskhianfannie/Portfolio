import React from 'react';
import {Button} from './Button';
import '../App.css'
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
           <video src='/Portfolio/videos/globe.mp4' autoPlay look muted/>
           <h1> Fannie Barskhian</h1>
           <div className="profile-pic">
               <img src="/Portfolio/images/zoom.jpg" alt=""></img>
           </div>
           <p> UC Berkeley Computer Science '23 | NASA JPL Academic Part Time </p>
           <div className="hero-btns">
               <Button className='btns' buttonStyle='btn--primary'
               buttonSize='btn--large'>
                   YouTube Page <i class="fab fa-youtube"></i>
               </Button>
           </div>

        </div>
    )
}

export default HeroSection
