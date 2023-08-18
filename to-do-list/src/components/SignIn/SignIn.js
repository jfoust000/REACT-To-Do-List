import '../SignUp/SignUp.css';
import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header.js';
import { useNavigate } from 'react-router-dom';

function SignIn () {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [invalidEntry, setInvalidEntry] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        if (userName.length === 0 || userEmail.length === 0 || userPassword.length === 0) {

            setInvalidEntry(true);

        } else {

            navigate("/todo"); 

        }

    };

    return (

        <div>
            <Header/>
        <div className='sign-up-container'>
            
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <div className='form-heading-container'>
                    <h2>Welcome To Remind Me</h2>
                </div>
                <p>Please Sign In</p>
                <div className='input-container'>
                    <label className='sign-up-label' htmlFor='userName'>
                        User Name 
                    </label>
                    <input type='text' className='sign-up-input' id='userName' onChange={e=>setUserName(e.target.value)}>
                    </input>
                    {invalidEntry && userName.length <= 0 ?
                    <label id='user-name-invalid'>Please Enter a Valid User Name</label> : ''}
                    <label className='sign-up-label' htmlFor='emailAddress'>
                        Email
                    </label>
                    <input type='email' className='sign-up-input' id='emailAddress' onChange={e=>setUserEmail(e.target.value)}>
                    </input>
                    {invalidEntry && userEmail.length <= 0 ?
                    <label id='email-invalid'>Please Enter a Valid Email Address</label> : ''}
                    <label className='sign-up-label' htmlFor='passwordField'>
                        Password
                    </label>
                    <input type='password' className='sign-up-input' id='passwordField' onChange={e=>setUserPassword(e.target.value)}>
                    </input>
                    {invalidEntry && userPassword.length <= 0 ?
                    <label id='password-invalid'>Please Enter a Valid Password</label> : ''}
                </div>
                <div className='sign-up-form-button'>
                    <button>Sign In</button>
                </div>
                <div className='go-to-sign-up-container'>
                    <p>Don't Have an Account?</p>
                </div>
                <div className='sign-up-form-button'>
                    <button>Create</button>
                </div>
            </form>
        </div>
        </div>

    );

}

export default SignIn;