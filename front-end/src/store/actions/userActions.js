import { axiosWithAuth } from "../../utils/axiosWithAuth"
import history from "../../history"

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"
export const fetchProfile = () => dispatch => {
    dispatch({ type: FETCH_START })
    axiosWithAuth().get("/users/profile")
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START })
    axiosWithAuth().post("/auth/login", credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
            history.push("/dashboard")
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.reponse }))
} 

export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"
export const register = credentials => dispatch => {
    dispatch({ type: REGISTER_START})
    axiosWithAuth().post("/auth/register", credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            dispatch({ type: REGISTER_SUCCESS, payload: res.data.user })
            history.push("/dashboard")
        })
        .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err.response }))
}
