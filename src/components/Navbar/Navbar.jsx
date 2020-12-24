import React from 'react';
import n from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
   return (
      <nav className={n.nav}>
         <div className={n.profile}>
            <NavLink to='/profile' activeClassName={n.active} className={n.link} >Profile</NavLink>
         </div>
         <div className={n.messages}>
            <NavLink to='/messages' activeClassName={n.active} className={n.link} >Messages</NavLink>
         </div>
         <div className={n.news}>
            <NavLink to='/news' activeClassName={n.active} className={n.link} >News</NavLink>
         </div>
         <div className={n.music}>
            <NavLink to='/music' activeClassName={n.active} className={n.link} >Music</NavLink>
         </div>
         <div className={n.settings}>
            <NavLink to='/settings' activeClassName={n.active} className={n.link} >Settings</NavLink>
         </div>
      </nav>
   );
}

export default Navbar;