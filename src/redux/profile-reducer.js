let UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
let ADD_POST = 'ADD-POST'

let initialState = {
    posts: [
        {post: 'О_О', likeCount: 10},
        {post: 'YOU DIED!', likeCount: 2},
        {post: 'Мой первый пост', likeCount: 15}
    ],
    newTextUpdate: ''
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {post: action.textPost, likeCount: 0}
            state.posts.push(newPost);
            state.newTextUpdate = '';
            return state;

        case UPDATE_POST_TEXT:
            state.newTextUpdate = action.updateTextPost;
            return state;

        default:
            return state;
    }
}

export const addPostCreator = postValue => ({type: ADD_POST, textPost: postValue});
export const updatePostTextCreator = postText => ({type: UPDATE_POST_TEXT, updateTextPost: postText});

export default profileReducer;