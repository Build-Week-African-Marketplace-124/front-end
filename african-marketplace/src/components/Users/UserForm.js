import React from 'react';

const UserForm = props => {
    return(
        <div>
            <form onSubmit={props.submitHandler}>
                <label htmlFor='userName'>
                    Name: 
                </label>
                <input type='text' name='userName' value={props.user.userName} onChange={props.changHandler} />

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