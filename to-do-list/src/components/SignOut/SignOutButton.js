import React from "react";
import './SignOutButton.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

function SignOutButton () {

    const auth = getAuth();
    const navigate = useNavigate();

    function signOutUser() {

        
        signOut(auth).then(() => {

            navigate("/");
           

       }).catch (err => alert(err))
        

    }

    return (
    
        <button id='sign-out-button'onClick={signOutUser}>Sign Out</button>
    
    );

}

export default SignOutButton;