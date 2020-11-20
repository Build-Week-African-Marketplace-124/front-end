import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { postLoginUser } from '../../actions/UserActions';
import { initialState } from '../../reducers/postUsersReducer';
import UserForm from './UserForm';
import Navbar from "../Nav-bar/User-LoginNav";
import { Header, Title } from '../Home/homeStyles';

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
        push('/')
    }

    return(
        <div>
            <Navbar login={true} />
            <Header>
                <Title>
                    Log In
                </Title>
            </Header>
            <UserForm submitHandler={submitHandler} user={user} changHandler={changeHandler} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        //need to specify reducer because using index.js with multiple reducers
        id: state.postUserReducer.id,
    }
}

const mapDispatchToProps = {postLoginUser};

export default connect(mapStateToProps, mapDispatchToProps)(Login);