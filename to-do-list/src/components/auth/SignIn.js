import '../SignUp/SignUp.css';
import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header.js';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

function SignIn () {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [invalidEntry, setInvalidEntry] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        if (userEmail.length === 0 || userPassword.length === 0) {

            setInvalidEntry(true);

        } else {

            signInWithEmailAndPassword(auth, userEmail, userPassword)
           .then(() => {

                navigate("/todo");

           })
           .catch((error) => {

            alert(error);

           });  

        }

    };

    function navigateToSignUp() {

        navigate("/signup"); 

    }

    return (

        <div>
            <Header/>
        <div className='sign-up-container'>
            
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <div className='form-heading-container'>
                    <h2>Welcome To Remind Me</h2>
                </div>
                <p>Sign In</p>
                <div className='input-container'>
                    <label className='sign-up-label' htmlFor='userName'>
                        Email
                    </label>
                    <input type='email' value={userEmail} className='sign-up-input' id='userEmail' onChange={e=>setUserEmail(e.target.value)}>
                    </input>
                    {invalidEntry && userEmail.length <= 0 ?
                    <label id='user-name-invalid'>Please Enter an Email Address</label> : ''}
                    <label className='sign-up-label' htmlFor='passwordField'>
                        Password
                    </label>
                    <input type='password' value={userPassword} className='sign-up-input' id='passwordField' onChange={e=>setUserPassword(e.target.value)}>
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
            </form>
            <div className='sign-up-form-button'>
                    <button onClick={navigateToSignUp}>Create</button>
            </div>
        </div>
        </div>

    );

}

export default SignIn;