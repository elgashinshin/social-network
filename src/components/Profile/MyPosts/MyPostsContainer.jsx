import React from 'react';
import {addPostCreator} from "../../../redux/profile-reducer";
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
        addPost: (textPost) => dispatch(addPostCreator(textPost))
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;