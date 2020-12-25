import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <div className={s.title}>My posts</div>
            <div className={s.wrapper}>
                <textarea className={s.text} placeholder='type the text'></textarea>
                <button className={`${s.add} ${s.btn}`}>Add post</button>
            </div>
            <div className={s.allPosts}>
                <Post post='YOU DIED!' like='2'/>
                <Post post='Мой первый пост' like='15'/>
            </div>
        </div>
    );
}

export default MyPosts;