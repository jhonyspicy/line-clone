import { Button } from '@mui/material'
import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../firebase'; // Adjust the import path as necessary}

function SignIn() {
    const signInWidthGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }


    return (
        <div>
            <Button onClick={signInWidthGoogle}>Googleでログインする</Button>
        </div>
    )
}

export default SignIn