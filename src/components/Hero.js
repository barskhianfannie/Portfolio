import React from 'react'
import {Button} from './Button'
import './Hero.css';
import HeroItem from './HeroItem';

function Hero() {
    return (
    <div className="hero-container'>">
        <div className='hero__wrapper'>
        <ul className='hero__items'>
            <HeroItem
              welcome='Welcome to my portfolio, My name is, '
              name = "Fannie Barskhian"
              paragraph1='University of California, Berkeley - Computer Science  '
              paragraph2="Rising Senior"
              paragraph3="NASA's Jet Propulstion Lab APX - Pasadena, CA "
              paragraph4="Radiation Effects Group"
            />
        </ul>
        </div>
    </div>
    )
}

export default Hero;
