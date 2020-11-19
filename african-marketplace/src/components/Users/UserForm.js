import React from 'react';

const UserForm = props => {
    return(
        <div>
            <form onSubmit={props.submitHandler}>
                <label htmlFor='username'>
                    Name: 
                </label>
                <input type='text' name='username' value={props.user.username} onChange={props.changHandler} />
                <br />
                <label htmlFor='password'>
                    Password: 
                </label>
                <input type='password' name='password' value={props.user.password} onChange={props.changHandler} />
                <br />
                <label htmlFor='department'>Department (buyer or seller)</label>
                <input type='text' name='department' value={props.user.department} onChange={props.changHandler} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UserForm;