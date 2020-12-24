import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.post}>
            <div className={p.wrapper}>
                <img className={p.avatar}
                     src='https://sun9-53.userapi.com/impg/dCtI58uKT7I19neimZoxidxW300yXN8l1rf4MA/vqlz_BPhlDs.jpg?size=735x736&quality=96&proxy=1&sign=acbcbc3c1392c90917f0bfb3ef082ba8&type=album'/>
                <div>
                    {props.post}
                </div>
            </div>
            <div className={p.likes}>
                <span>Like {props.like}</span>
            </div>
        </div>
    );
}

export default Post;