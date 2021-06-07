import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button} from './Button.js'
import './SideBar.css';



function SideBar() {

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
 
    return (
        <>
        <nav className = "sidebar-left">
            <div className="sidebar-container">
                <div className="sidebar-icon" onClick={handleClick}>
                </div>
                <ul className={click ? 'sidebar-menu active': 'sidebar-menu'}>
                    <li className='sidebar-item'>
                        <a href='https://github.com/barskhianfannie/' className='sidebar-links' onClick={closeMobileMenu}>
                            <i class="fab fa-github-square"></i>
                        </a>              
                    </li>
                    <li className='sidebar-item'>
                        <a href='https://www.linkedin.com/in/barskhianfannie/' className='sidebar-links' onClick={closeMobileMenu}>
                            <i class="fab fa-linkedin"></i>
                        </a>              
                    </li>
                </ul>
            </div>
        </nav>

        </>
    )
}

export default SideBar;