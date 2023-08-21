import React, { useEffect, useState }  from 'react';
import { auth } from '../../config/firebaseConfig.js';
import { onAuthStateChanged } from 'firebase/auth';
import './AuthDetails.css';

function AuthDetails () {

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {

        const listen = onAuthStateChanged(auth, (user) => {

            if (user) {

                setAuthUser(user);

            } else {

                setAuthUser(null);

            }

        }); 

        return () => {

            listen();

        };

    },[])

    return (

        <div>
            {authUser ? <p className='sign-in-status'>{`Signed In as ${authUser.displayName}`}</p> : <p>Signed Out</p>}
        </div>
    );

}

export default AuthDetails