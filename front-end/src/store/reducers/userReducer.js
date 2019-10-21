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
            return {
                ...state,
                loading: true,
                error: null,
                currentUser: null
            }
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                currentUser: action.payload.username,
                loading: false
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;

    }
}