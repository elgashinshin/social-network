import React from "react";
import styles from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    let name = props.name;
    let path = props.id;

    return(
        <div className={styles.dialogs__item}>
            <NavLink to={path}>
            <img className={styles.avatar} src='https://sun9-51.userapi.com/impg/tGgpBqBdoH_iVUeUpxEAHSPDS66qwiWgEVZMwg/BRhtVjHKg5g.jpg?size=1080x1080&quality=96&proxy=1&sign=138523c76ee738d79e1ad58a3cdf48a9&type=album'/>
            </NavLink>
            <NavLink className={styles.name} to={`/messages/${path}`}>{name}</NavLink>
        </div>
    );
}

export default DialogsItem;