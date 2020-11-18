import React from 'react';

const UserForm = props => {
    return(
        <div>
            <form onSubmit={props.submitHandler}>
                <label htmlFor='username'>
                    Name: 
                </label>
                <input type='text' name='username' value={props.user.username} onChange={props.changHandler} />

                <label htmlFor='password'>
                    Password: 
                </label>
                <input type='password' name='password' value={props.user.password} onChange={props.changHandler} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UserForm;