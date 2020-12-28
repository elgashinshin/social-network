import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
   return (
      <nav className={styles.nav}>
         <div className={styles.profile}>
            <NavLink to='/profile' activeClassName={styles.active} className={styles.link} >Profile</NavLink>
         </div>
         <div className={styles.messages}>
            <NavLink to='/messages' activeClassName={styles.active} className={styles.link} >Messages</NavLink>
         </div>
         <div className={styles.news}>
            <NavLink to='/news' activeClassName={styles.active} className={styles.link} >News</NavLink>
         </div>
         <div className={styles.music}>
            <NavLink to='/music' activeClassName={styles.active} className={styles.link} >Music</NavLink>
         </div>
         <div className={styles.settings}>
            <NavLink to='/settings' activeClassName={styles.active} className={styles.link} >Settings</NavLink>
         </div>
      </nav>
   );
}

export default Navbar;