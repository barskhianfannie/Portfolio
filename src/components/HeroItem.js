import React from 'react'
import {Link} from 'react-router-dom'

function HeroItem(props) {
    return (
        <>
        <li className="hero__item">
            <div className='hero__item__info'>
                <h5 className="hero__item__text">{props.welcome}</h5>
                <h17 className="hero__item__text1">{props.name}</h17>

            </div>
            <div className='hero_stats'>
                <Link to="/Portfolio" className="school-logo" >
                    <i class="fas fa-school"></i> University of California, Berkeley - Computer Science '22
                </Link>
                <Link to="/Portfolio" className="nasa-logo" >
                    <i class="fas fa-satellite"></i> NASA's Jet Propulsion Laboratory APX - Radiation Effects Group
                </Link>
                <Link to="/Portfolio" className="mit-logo" >
                    <i class="fad fa-certificate"></i> Massachusettes Inst. of Technology - New Ventures Leadership
                </Link>
                <a href="https://levitatesociety.com" className="levitate-logo" >
                    <i class="fas fa-trademark"></i> Levitate Society (Owner/Designer)
                </a>
            </div>
        </li>  
        </>
    )
}

export default HeroItem
