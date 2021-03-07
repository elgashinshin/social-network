import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo_wrapper}>
                <img className={styles.logo} src="https://image.freepik.com/free-vector/letter-e-with-arrow-logo-template_23987-61.jpg"></img>
                <h1 className={styles.name}>Elgasocial</h1>
            </div>
            {
                !props.auth
                    ? <NavLink to={'/login'} className={styles.login}>Login</NavLink>
                    : <div>{props.login} <button onClick={props.logOut}>Logout</button></div>
            }


        </header>
    );
}

export default Header;