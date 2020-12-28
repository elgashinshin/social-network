import React from 'react';
import styles from './Header.module.css';

const Header = () => {
   return (
      <header className={styles.header}>
         <img className={styles.logo} src="https://image.freepik.com/free-vector/letter-e-with-arrow-logo-template_23987-61.jpg"></img>
         <h1 className={styles.name}>Elgasocial</h1>
      </header>
   );
}

export default Header;