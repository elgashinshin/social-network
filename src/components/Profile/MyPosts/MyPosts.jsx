import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostCreator, updatePostTextCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let onTextPostChange = (ev) => {
        let textPost = ev.target.value;
        console.log(textPost);
        props.dispatch(updatePostTextCreator(textPost))
    };
    let addPost = () => {
        let textPost = props.updatePostText;
        props.dispatch(addPostCreator(textPost));
    };
    let postsElement = props.post.map(p => <Post post={p.post} like={p.likeCount}/>);

    return (
        <div className={styles.posts}>
            <div className={styles.title}>My posts</div>
            <div className={styles.wrapper}>
                <textarea onChange={onTextPostChange} value={props.updatePostText} className={styles.text} placeholder='Write the post'/>
                <button onClick={addPost} className={`${styles.add} ${styles.btn}`}>Add post</button>
            </div>
            <div className={styles.allPosts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;