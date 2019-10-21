import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    register
} from "../actions"

const initialState = {
    currentUser: null,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            console.log('logging in!')
            return {
                ...state, 
                loading: true,
                error: null,
                currentUser: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case REGISTER_START:
            console.log('registering!')
            return {
                ...state,
                loading: true,
                error: null,
                currentUser: null
            }
        default:
            return state;

    }
}