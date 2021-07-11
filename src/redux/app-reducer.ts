import {setUser} from "./login-reducer";

const INITIALIZED = 'INITIALIZED';

let initialState = {
    initialize: false
}

export type InitialStateType = typeof initialState

let appReducer = (state = initialState, action : any) : InitialStateType  => {
    switch(action.type) {
        case INITIALIZED:
            return {
                ...state,
                initialize: true,
            }
        default:
            return state;
    }
}

type InitializeSuccessActionType = {
    type: typeof INITIALIZED
}

export const initializeSuccess = () : InitializeSuccessActionType => ({type: INITIALIZED})

export const initializeApp = () => {
    return (dispatch : any) => {
        let me = dispatch(setUser());
        Promise.all([me]).then(() => {
            dispatch(initializeSuccess())
        })
    }
}

export default appReducer;