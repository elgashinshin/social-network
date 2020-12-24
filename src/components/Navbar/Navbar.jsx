import React from 'react';
import n from './Navbar.module.css';

const Navbar = () => {
   return (
      <nav className={n.nav}>
         <div className={n.profile}>
            <a className={`${n.link} ${n.active}`} href='#'>Profile</a>
         </div>
         <div className={n.messages}>
            <a className={n.link} href='#'>Messages</a>
         </div>
         <div className={n.news}>
            <a className={n.link} href='#'>News</a>
         </div>
         <div className={n.music}>
            <a className={n.link} href='#'>Music</a>
         </div>
         <div className={n.settings}>
            <a className={n.link} href='#'>Settings</a>
         </div>
      </nav>
   );
}

export default Navbar;