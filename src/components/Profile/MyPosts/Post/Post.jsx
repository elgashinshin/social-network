import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.wrapper}>
                <img className={styles.avatar}
                     src='https://sun9-53.userapi.com/impg/dCtI58uKT7I19neimZoxidxW300yXN8l1rf4MA/vqlz_BPhlDs.jpg?size=735x736&quality=96&proxy=1&sign=acbcbc3c1392c90917f0bfb3ef082ba8&type=album'/>
                <div>
                    {props.post}
                </div>
            </div>
            <div className={styles.likes}>
                <span>Like {props.like}</span>
            </div>
        </div>
    );
}

export default Post;