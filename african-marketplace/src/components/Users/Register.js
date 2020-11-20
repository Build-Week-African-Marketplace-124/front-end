import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { postRegisterUser } from '../../actions/UserActions';
import axiosWithAuth from '../../utils/axiosWithAuth';
import UserForm from './UserForm';
import Navbar from "../Nav-bar/User-LoginNav";
import { Header, Title } from '../Home/homeStyles';

const Register = props => {
    const [user, setUser] = useState({
        username: '',
        password: '',
        department: '',
    });
    const {push} = useHistory();

    // useEffect(() => {
    //     axiosWithAuth()
    //         .get('https://african-marketplace-back-end.herokuapp.com/users')
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // })

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.postRegisterUser(user);
        setUser({
            username: '',
            password: '',
            department: '',
        });
        push('/login')
    }
    return(
        <div>
            <Navbar register={true} />
            <Header>
                <Title>
                    Register
                </Title>
            </Header>
            <UserForm submitHandler={submitHandler} user={user} changHandler={changeHandler} />
        </div>
    )
}

const mapDispatchToProps = {postRegisterUser}

export default connect(null, mapDispatchToProps)(Register);