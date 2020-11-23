import Axios from "axios";
import { ERROR_POSTING_USER, START_POSTING_USER, SUCCESS_DELETING_USER, SUCCESS_POSTING_USER } from "../reducers/postUsersReducer";
import axiosWithAuth from "../utils/axiosWithAuth";
import getUserID from "../utils/getUserID";

export const getUser = id => dispatch => {
    dispatch({type: START_POSTING_USER});
    axiosWithAuth()
        .get(`https://african-marketplace-back-end.herokuapp.com/users/${id}`)
        .then(res => {
            dispatch({
                type: SUCCESS_POSTING_USER,
                payload: res.data,
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
    console.log({user})
    dispatch({type: START_POSTING_USER});
    Axios
        .post('https://african-marketplace-back-end.herokuapp.com/auth/register', user)
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
        .post('https://african-marketplace-back-end.herokuapp.com/auth/login', user)
        .then(res =>{
            const id = getUserID(res.data.token)
            dispatch({
                type: SUCCESS_POSTING_USER,
                payload: res.data,
                id: id,
            });
            localStorage.setItem('token', res.data.token);
        })
        .catch(err => {
            dispatch({
                type: ERROR_POSTING_USER,
            });
            console.log(err);
        });
}

// export const putUser = user => dispatch => {
//     dispatch({type: START_POSTING_USER});
//     axiosWithAuth()
//         .put('https://reqres.in/api/users/2', {
//             "name": "morpheus",
//             "job": "zion resident"
//         })
//         .then(res =>{
//             // dispatch({
//             //     type: SUCCESS_POSTING_USER,
//             //     payload: res.data.data,
//             // });
//             console.log(res.data)
//         })
//         .catch(err => {
//             dispatch({
//                 type: ERROR_POSTING_USER,
//             });
//             console.log(err);
//         });
// }

export const deleteUser = id => dispatch => {
    dispatch({type: START_POSTING_USER});
    axiosWithAuth()
        .delete(`https://african-marketplace-back-end.herokuapp.com/users/${id}`)
        .then(res =>{
            dispatch({
                type: SUCCESS_DELETING_USER,
            });
            console.log(res)
            localStorage.removeItem('token')
        })
        .catch(err => {
            dispatch({
                type: ERROR_POSTING_USER,
            });
            console.log(err);
        });
}