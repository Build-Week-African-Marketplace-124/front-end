import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getUser, deleteUser } from '../../actions/UserActions';
import { Header, Title } from '../Home/homeStyles';
import Navbar from "../Nav-bar/User-LoginNav";
import '../../App.css'
import axiosWithAuth from '../../utils/axiosWithAuth';

const Profile = props => {
    const [userItems, setUserItems] = useState();
    const {push} = useHistory();
    const params = useParams();

    useEffect(() => {
        props.getUser(params.id);
    })

    useEffect(() => {
        axiosWithAuth()
            .get(`https://african-marketplace-back-end.herokuapp.com/users/${params.id}/items`)
            .then(res => {
                setUserItems(
                    Object.values(res.data.items)
                )
            })
            .catch(err => console.log(err));
    }, [])
    console.log(userItems)

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
            <Navbar profile={true} />
            <Header>
                <Title>
                    Profile
                </Title>
            </Header>
            {userItems 
                ? userItems.map(item => (
                    <p key={item.id}>{item.name}</p>
                ))
                : null
        }
            <p className='paragraph-text'>{props.userName}</p>
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