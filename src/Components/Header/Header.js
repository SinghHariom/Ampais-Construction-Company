import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
// Css
import './Header.css';
// Images
import WebsiteLogo from '../../Assets/Images/ampaislogo.png';
function Header() {
  const [show , setShow] = useState({
      change: false,
      header: true,
      menu: false,
      subMenu: false
    });
    
  // header active 
  // header set min-width:1024
  const headerFix = ()=>{
    window.addEventListener('scroll',()=>{
      if (window.scrollY > document.querySelector('.hero').offsetHeight) {
        setShow({...show , change: true});
      } else {
        setShow({...show , change: false});
      }
    });
  };

  

  // header set max-width:1024
  const headerSlide = ()=>{
    let primaryScroll = window.scrollY;

    window.addEventListener('scroll',()=>{
      // debug
      setShow({...show , change: false});

      const scrollNow = window.scrollY;
  
      if (scrollNow > document.querySelector('.hero').offsetHeight){
        if (scrollNow >= primaryScroll){
          setShow({header: false});
        } else {
          setShow({...show , header: true});
        }

        primaryScroll = scrollNow;
      }
    });
  };
  // by responsive
  if (window.innerWidth <= 1024){
    headerSlide();
  } else {
    headerFix();
  }

  // by resize
  window.addEventListener('resize',()=>{
  if (window.innerWidth <= 1024){
    headerSlide();
  } else {
    headerFix();
    // debug
    setShow({...show , header: true});
  }
});

  // show/hide menu
  const menuHandler = ()=>{
    show.menu ? setShow({...show , menu: false}) : setShow({...show , menu: true});
  }
  // show/hide submenu
  // eslint-disable-next-line
  const subMenuHandler = ()=>{
    show.subMenu ? setShow({...show , subMenu: false}) : setShow({...show , subMenu: true});
  }
  // hide menu
  show.menu && document.addEventListener('click',(e)=>{
    if (!e.target.parentElement.classList.contains('header-nav') && !e.target.parentElement.classList.contains('menu-item')) {
      setShow({...show , menu: false});
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <header id='header' className={`header ${(show.change ? 'header-secondary' : '')} ${(show.header ? '' : 'hide-header')}`}>
      <nav className='header-nav container container-lg'>
        {/* website logo */}
        <Link to='/' className='website-logo'>
          <img src={WebsiteLogo} alt='website logo' title='website logo'/>
        </Link>

        {/* menu */}
        <ul className={`menu ${(show.menu ? 'show' : '')}`}>
          <li className='menu-item'>
            <Link to='/' className='menu-item-link menu-link'>home</Link>
          </li>
          
          <li className='menu-item'>
            <Link to='/about' className='menu-item-link menu-link'>about</Link>
          </li>
          
          <li className='menu-item'>
            <Link to='/services' className='menu-item-link menu-link'>services</Link>
          </li>
          
          <li className='menu-item work'>
            <Link to='/work' className='menu-item-link menu-link'>work</Link>
          </li>
          <li className='menu-item'>
            <Link to='/get-quote' className='menu-item-link menu-link'><span className='btn btn-primary'>get quote</span></Link>
          </li>       
        </ul>

        {/* menu hamburger */}
        <button className={show.menu ? 'menu-hamburger icon-close' : 'menu-hamburger icon-menu'} onClick={menuHandler}></button>
      </nav>
    </header>
  );
}

export default Header;