import Axios from "axios";
import { ERROR_POSTING_USER, START_POSTING_USER, SUCCESS_POSTING_USER } from "../reducers/postUsersReducer";
import axiosWithAuth from "../utils/axiosWithAuth";

export const getUser = () => dispatch => {
    dispatch({type: START_POSTING_USER});
    axiosWithAuth()
        .get('https://reqres.in/api/users/2')
        .then(res => {
            dispatch({
                type: SUCCESS_POSTING_USER,
                payload: res.data.data,
            });
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

export const putUser = user => dispatch => {
    dispatch({type: START_POSTING_USER});
    axiosWithAuth()
        .put('https://reqres.in/api/users/2', {
            "name": "morpheus",
            "job": "zion resident"
        })
        .then(res =>{
            dispatch({
                type: SUCCESS_POSTING_USER,
                payload: res.data.data,
            });
        })
        .catch(err => {
            dispatch({
                type: ERROR_POSTING_USER,
            });
        });
}

export const deleteUser = user => dispatch => {
    dispatch({type: START_POSTING_USER});
    axiosWithAuth
        .delete('https://reqres.in/api/users/2')
        .then(res =>{
            dispatch({
                type: SUCCESS_POSTING_USER,
                payload: res.data.data,
            });
            console.log(res)
            localStorage.removeItem('token')
        })
        .catch(err => {
            dispatch({
                type: ERROR_POSTING_USER,
            });
            console.log(err, user);
        });
}