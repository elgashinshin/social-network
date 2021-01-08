import React from 'react';
import {addPostCreator, updatePostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let changeTextPost = (textPost) => {
        let action = updatePostTextCreator(textPost);
        props.store.dispatch(action);
    };
    let addPost = (textPost) => {
        let action = addPostCreator(textPost);
        props.store.dispatch(action);
    };

    return (
        <MyPosts
            changeTextPost={changeTextPost}
            addPost={addPost}
            post={state.profilePage.posts}
            updateText={state.profilePage.newTextUpdate}
        />
    );
}

export default MyPostsContainer;