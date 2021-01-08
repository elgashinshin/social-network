import React from 'react';
import {addPostCreator, updatePostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        post: state.profilePage.posts,
        updateText: state.profilePage.newTextUpdate
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeTextPost: (textPost) => dispatch(updatePostTextCreator(textPost)),
        addPost: (textPost) => dispatch(addPostCreator(textPost))
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;