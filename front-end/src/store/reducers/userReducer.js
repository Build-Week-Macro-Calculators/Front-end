import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from "../actions"

const initialState = {
    currentUser: null,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
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
                currentUser: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                err: action.payload,
                load: false
            }
        case REGISTER_START:
            return {
                ...state,
                loading: true,
                error: null,
                currentUser: null
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.user,
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