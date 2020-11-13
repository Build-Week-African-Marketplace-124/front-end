import Axios from "axios";
import { ERROR_GETTING_USER, START_GETTING_USER, SUCCESS_GETTING_USER } from "../reducers/getUserReducer"
import { ERROR_POSTING_USER, START_POSTING_USER, SUCCESS_POSTING_USER } from "../reducers/postUsersReducer";

export const getUser = () => dispatch => {
    dispatch({type: START_GETTING_USER});
    Axios
        .get('https://reqres.in/api/users/2')
        .then(res => {
            dispatch({
                type: SUCCESS_GETTING_USER,
                payload: res.data,
            });
            localStorage.setItem('token', res.data.data.id);
            console.log(res)
        })
        .catch(err => {
            dispatch({
                type: ERROR_GETTING_USER,
            });
            console.log(err);
        });
}

export const postUser = user => dispatch => {
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