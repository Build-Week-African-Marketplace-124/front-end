import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { getUser, putUser, deleteUser } from '../../actions/UserActions';
import { initialState } from '../../reducers/postUsersReducer';

const Profile = props => {
    const [user, setUser] = useState(initialState);
    const {push} = useHistory();

    useEffect(() => {
        props.getUser();
    })

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
        console.log('change', user)
    }

    const submitHandler = e => {
        console.log('submit', user)
        e.preventDefault();
        props.putUser(user);
        setUser(initialState);
    }

    const deleteHandler = () => {
        props.deleteUser();
        push('/');
    }
    return(
        <div>
            <p>profile</p>
            <form onSubmit={submitHandler}>
                <label htmlFor='userName'>Name: </label>
                <input type='text' name='userName' value={user.userName} placeholder={props.userName} onChange={changeHandler} />
                <button type='submit'>Update Profile</button>
            </form>
                <button onClick={deleteHandler}>Delete Account</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        //need to specify reducer because using index.js with multiple reducers
        userName: state.postUserReducer.userName,
    }
}

const mapDispatchToProps = {getUser, putUser, deleteUser}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);