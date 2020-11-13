import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { postUser } from '../../actions/UserActions';
import { initialState } from '../../reducers/postUsersReducer';
import UserForm from './UserForm';

const Register = props => {
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
        props.postUser(user);
        setUser(initialState);
        push('/login')
    }
    return(
        <div>
            <UserForm submitHandler={submitHandler} user={user} changHandler={changeHandler} />
        </div>
    )
}

const mapDispatchToProps = {postUser}

export default connect(null, mapDispatchToProps)(Register);