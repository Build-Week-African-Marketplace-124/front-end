import Axios from "axios";
// do we need to import axiosWithAuth??
import { ERROR_POSTING_USER, START_POSTING_USER, SUCCESS_POSTING_USER } from "../reducers/postUsersReducer";

export const getUser = () => dispatch => {
    dispatch({type: START_POSTING_USER});
    Axios
        .get('https://reqres.in/api/users/2')
        .then(res => {
            dispatch({
                type: SUCCESS_POSTING_USER,
                payload: res.data,
            });
            console.log(res)
        })
        .catch(err => {
            dispatch({
                type: ERROR_POSTING_USER,
            });
            console.log(err);
        });
}

export const postRegisterUser = user => dispatch => {
    dispatch({type: START_POSTING_USER});
    Axios
        .post('https://reqres.in/api/users', user)
        .then(res =>{
            dispatch({
                type: SUCCESS_POSTING_USER,
                payload: res.data,
            });
            console.log(res)
        })
        .catch(err => {
            dispatch({
                type: ERROR_POSTING_USER,
            });
            console.log(err);
        });
}

export const postLoginUser = user => dispatch => {
    dispatch({type: START_POSTING_USER});
    Axios
        .post('https://reqres.in/api/login', {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        })
        .then(res =>{
            dispatch({
                type: SUCCESS_POSTING_USER,
                payload: res.data,
            });
            localStorage.setItem('token', res.data.token);
            console.log(res.data)
        })
        .catch(err => {
            dispatch({
                type: ERROR_POSTING_USER,
            });
            console.log(err);
        });
}