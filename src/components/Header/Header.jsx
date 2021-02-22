import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo_wrapper}>
                <img className={styles.logo} src="https://image.freepik.com/free-vector/letter-e-with-arrow-logo-template_23987-61.jpg"></img>
                <h1 className={styles.name}>Elgasocial</h1>
            </div>
            {
                !props.auth ? <button onClick={props.clickOnLogin} className={styles.login}>Login</button> : 'Вы вошли как, ' + props.login
            }


        </header>
    );
}

export default Header;