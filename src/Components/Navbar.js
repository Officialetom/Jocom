import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import Button  from './Button';

  function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () =>setClick(!click);
  const closeMobileMenu =()=>setClick(false)

  const showButton =()=>{
    if (window.innerWidth <=950) {
      setButton(false)      
    }else{
      setButton(true)
    }
  };
  useEffect (() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className='navbar-logo' onClick={handleClick}>
                JOCOM <i class="fa-solid fa-computer" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link  to = '/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link  to = '/courses' className='nav-links' onClick={closeMobileMenu}>
                Courses
              </Link>
            </li>

            <li className='nav-item'>
              <Link  to = '/about-us' className='nav-links' onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>

            <li>
              <Link  to = '/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                SIGN UP
              </Link>
            </li>
            
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
