import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { postLoginUser } from '../../actions/UserActions';
import { initialState } from '../../reducers/postUsersReducer';
import UserForm from './UserForm';

const Login = props => {
    const [user, setUser] = useState(initialState);
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
            <UserForm submitHandler={submitHandler} user={user} changHandler={changeHandler} />
            <p><Link to='/register'>Register</Link></p>
        </div>
    )
}

const mapDispatchToProps = {postLoginUser};

export default connect(null, mapDispatchToProps)(Login);