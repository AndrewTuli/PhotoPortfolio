import React, { useContext } from 'react';
// import components
import Socials from './Socials';
import Logo from '../img/header/logo.png';
import MobileNav from './MobileNav';

// import link
import { Link } from 'react-router-dom';

// Cursor Context refresh from About
//import { CursorContext } from '../context/CursorContext';

const Header = () => {
  //const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <header className='fixed w-full px-[30px] 
    lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row 
      lg:items-center w-full justify-between'>
        {/* logo [width = 200px] */}
        <Link
          //onMouseEnter={mouseEnterHandler}
          //onMouseLeave={mouseLeaveHandler}
          to={'/'} className='max-w-[200px]'>
          <img src={Logo} alt='' />
        </Link>

        {/* nav initially hidden - show on desktop site (route path described at AnimRoutes.js) */}
        <nav
          //onMouseEnter={mouseEnterHandler}
          //onMouseLeave={mouseLeaveHandler}
          className='hidden xl:flex gap-x-12 
        font-semibold'>
          <Link to={'/'}
            className='text-[#696c6d] hover:text-primary transition'>
            HOME</Link>
          <Link to={'/about'}
            className='text-[#696c6d] hover:text-primary transition'>
            ABOUT</Link>
          <Link to={'/portfolio'}
            className='text-[#696c6d] hover:text-primary transition'>
            PORTFOLIO</Link>
          <Link to={'/contact'}
            className='text-[#696c6d] hover:text-primary transition'>
            CONTACT</Link>
        </nav>
      </div>

      {/* socials */}
      <Socials />

      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
