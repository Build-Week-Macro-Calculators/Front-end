import { axiosWithAuth } from "../../utils/axiosWithAuth"
import { Redirect } from "react-router-dom"  

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const login = (credentials, history) => dispatch => {
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
export const register = (credentials, history) => dispatch => {
    dispatch({ type: REGISTER_START})
    console.log(credentials)
    axiosWithAuth().post("/auth/register", credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.user.token)
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
            history.push("/dashboard")
        })
        .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err.response }))
}
