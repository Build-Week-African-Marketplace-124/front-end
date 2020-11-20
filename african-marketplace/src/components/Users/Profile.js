import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getUser, deleteUser } from '../../actions/UserActions';
import { initialState } from '../../reducers/postUsersReducer';

const Profile = props => {
    // const [user, setUser] = useState(initialState);
    const {push} = useHistory();
    const params = useParams();
    console.log('profile props', props)

    useEffect(() => {
        props.getUser(params.id);
    })

    // const changeHandler = e => {
    //     setUser({
    //         ...user,
    //         [e.target.name]: e.target.value,
    //     })
    //     console.log('change', user)
    // }

    // const submitHandler = e => {
    //     console.log('submit', user)
    //     e.preventDefault();
    //     props.putUser();
    //     setUser(initialState);
    // }

    const deleteHandler = () => {
        props.deleteUser(params.id);
        push('/');
    }
    return(
        <div>
            <h1>Profile</h1>
            <p>{props.userName}</p>
            <button onClick={deleteHandler}>Delete Account</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        //need to specify reducer because using index.js with multiple reducers
        id: state.postUserReducer.id,
        userName: state.postUserReducer.userName,
    }
}

const mapDispatchToProps = {getUser, deleteUser}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);