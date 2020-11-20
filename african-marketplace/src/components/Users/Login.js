import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { postLoginUser } from '../../actions/UserActions';
import { initialState } from '../../reducers/postUsersReducer';
import getUserID from '../../utils/getUserID';
import UserForm from './UserForm';

const Login = props => {
    const [user, setUser] = useState(initialState);
    const id = getUserID(localStorage.getItem('token'))
    const {push} = useHistory();

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.postLoginUser(user);
        setUser(initialState);
        // push('/')
    }

    return(
        <div>
            <h1>Log In</h1>
            <UserForm submitHandler={submitHandler} user={user} changHandler={changeHandler} />
            <p><Link to='/register'>Register</Link></p>
            <p><Link to={`/profile/${id}`}>Profile</Link></p>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('login', state.postUserReducer)
    return {
        //need to specify reducer because using index.js with multiple reducers
        id: state.postUserReducer.id,
    }
}

const mapDispatchToProps = {postLoginUser};

export default connect(mapStateToProps, mapDispatchToProps)(Login);