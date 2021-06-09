import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button} from './Button.js'
import './Navbar.css';
import {Interests} from './Interests'



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    // Menu from hamburger to x
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () =>setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className = "navbar">
            <div className="navbar-container">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='#Personal_Interests' className='nav-links' onClick={closeMobileMenu}>
                            About Me
                        </a>              
                    </li>
                    <li className='nav-item'>
                        <a href= '#Projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </a>            
                    </li>
                    <li className='nav-item'>
                        <a href= '#Resume' className='nav-links' onClick={closeMobileMenu}>
                            Resume
                        </a>              
                    </li>
                    <li className='nav-item'>
                        <Link to='www.github.com/barskhianfannie' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Contact Me
                        </Link>              
                    </li>
                </ul>
                
            </div>
        </nav>
        </>
    )
}

export default Navbar;

