import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
   return (
      <nav className={styles.nav}>
         <div className={styles.profile}>
            <NavLink to='/profile' activeClassName={styles.active} className={styles.link} >Профиль</NavLink>
         </div>
         <div className={styles.messages}>
            <NavLink to='/messages' activeClassName={styles.active} className={styles.link} >Сообщения</NavLink>
         </div>
          <div className={styles.messages}>
            <NavLink to='/users' activeClassName={styles.active} className={styles.link} >Пользователи</NavLink>
         </div>

         {/*<div className={styles.news}>*/}
         {/*   <NavLink to='/news' activeClassName={styles.active} className={styles.link} >Новости</NavLink>*/}
         {/*</div>*/}
         {/*<div className={styles.music}>*/}
         {/*   <NavLink to='/music' activeClassName={styles.active} className={styles.link} >Музыка</NavLink>*/}
         {/*</div>*/}
         {/*<div className={styles.settings}>*/}
         {/*   <NavLink to='/settings' activeClassName={styles.active} className={styles.link} >Настройки</NavLink>*/}
         {/*</div>*/}
      </nav>
   );
}

export default Navbar;