import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.post.map(p => <Post post={p.post} like={p.likeCount}/>);

    return (
        <div className={styles.posts}>
            <div className={styles.title}>My posts</div>
            <div className={styles.wrapper}>
                <textarea className={styles.text} placeholder='Write the post'></textarea>
                <button className={`${styles.add} ${styles.btn}`}>Add post</button>
            </div>
            <div className={styles.allPosts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;