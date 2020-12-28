import React from 'react';
import styles from "./Messages.module.css";

const Messages = (props) => {


    return (
        <div className={styles.messageWrapper}>
            <img className={styles.avatar} src='https://sun9-51.userapi.com/impg/tGgpBqBdoH_iVUeUpxEAHSPDS66qwiWgEVZMwg/BRhtVjHKg5g.jpg?size=1080x1080&quality=96&proxy=1&sign=138523c76ee738d79e1ad58a3cdf48a9&type=album'/>
            <div className={styles.message}>{props.message}</div>
        </div>

    );

}

export default Messages;