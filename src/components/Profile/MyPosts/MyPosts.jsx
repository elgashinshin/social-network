import React from 'react';
import mp from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div>
                <Post post='Круто!' like='2'/>
                <Post post='Мой первый пост' like='15'/>
            </div>
        </div>
    );
}

export default MyPosts;