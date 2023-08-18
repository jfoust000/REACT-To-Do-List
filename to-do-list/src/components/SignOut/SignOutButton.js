import React from "react";
import './SignOutButton.css';
import { useNavigate } from 'react-router-dom';

function SignOutButton () {

    const navigate = useNavigate();

    function navigateToSignIn () {

        navigate("/");

    }

    return (
    
        <button id='sign-out-button'onClick={navigateToSignIn}>Sign Out</button>
    
    );

}

export default SignOutButton;