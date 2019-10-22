import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from "../actions"

const initialState = {
    currentUser: {},
    loading: false,
    error: null,
    calorieIntake: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_SUCCESS:
            const {weight, height, age, exerciseFrequency, goal, male} = action.payload;            
            return {
                ...state,
                currentUser: action.payload,
                loading: false,
                calorieIntake: male
                    ? Math.ceil(((66 + (6.23 * weight) + (12.7 * height) - (6.8 * age)) * exerciseFrequency) * (1 + goal))
                    : Math.ceil(((655 + (4.35 * weight) + (4.7 * height) - (4.5 * age)) * exerciseFrequency) * (1 + goal))
            }
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
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
                currentUser: action.payload,
                loading: false,
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