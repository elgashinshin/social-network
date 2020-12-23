import React from 'react';

const Navbar = () => {
   return (
      <nav className='nav'>
         <div className='nav__profile profile-nav nav-active'>
            <a className='profile-nav__link link-nav' href='#'>Profile</a>
         </div>
         <div className='nav__messages messages-nav'>
            <a className='messages-nav__link link-nav' href='#'>Messages</a>
         </div>
         <div className='nav__news news-nav'>
            <a className='news-nav__link link-nav' href='#'>News</a>
         </div>
         <div className='nav__music music-nav'>
            <a className='music-nav__link link-nav' href='#'>Music</a>
         </div>
         <div className='nav__settings settings-nav'>
            <a className='settings-nav__link link-nav' href='#'>Settings</a>
         </div>
      </nav>
   );
}

export default Navbar;