import {setUser} from "./login-reducer";

const INITIALIZED = 'INITIALIZED';

let initialState = {
    initialize: false
}

let appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED:
            return {
                ...state,
                initialize: true
            }
        default:
            return state;
    }
}

export const initializeSuccess = () => ({type: INITIALIZED})

export const initializeApp = () => {
    return (dispatch) => {
        let me = dispatch(setUser());
        Promise.all([me]).then(() => {
            dispatch(initializeSuccess())
        })
    }
}

export default appReducer;