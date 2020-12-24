import React from 'react';
import n from './Navbar.module.css';

const Navbar = () => {
   return (
      <nav className={n.nav}>
         <div className={n.profile}>
            <a className={`${n.link} ${n.active}`} href='/profile'>Profile</a>
         </div>
         <div className={n.messages}>
            <a className={n.link} href='/messages'>Messages</a>
         </div>
         <div className={n.news}>
            <a className={n.link} href='/news'>News</a>
         </div>
         <div className={n.music}>
            <a className={n.link} href='/music'>Music</a>
         </div>
         <div className={n.settings}>
            <a className={n.link} href='/settings'>Settings</a>
         </div>
      </nav>
   );
}

export default Navbar;