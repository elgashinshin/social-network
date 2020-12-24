import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.post}>
            {props.post}
            <div>
                <span>Like {props.like}</span>
            </div>
        </div>
    );
}

export default Post;