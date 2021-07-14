import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let addPost = (values) => {
        props.addPost(values.newPostText);
    };

    let postsElement = props.post.map(p => <Post post={p.post} like={p.likeCount}/>);

    return (
        <div className={styles.posts}>
            <div className={styles.title}>Мои посты</div>
            <NewPostFormRedux onSubmit={addPost} />
            <div className={styles.allPosts}>
                {postsElement}
            </div>
        </div>
    );
}

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.wrapper}>
            <Field name={'newPostText'} className={styles.text} placeholder='Напишите запись' component={'textarea'} />
            <button className={`${styles.add} ${styles.btn}`}>Добавить запись</button>
        </form>
    )
}

const NewPostFormRedux = reduxForm({
    form: 'newPost'
})(NewPostForm)

export default MyPosts;