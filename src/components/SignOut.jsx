import { Button } from '@mui/material'
import React from 'react'
import { auth } from '../firebase'

function SignOut() {
    return (
        <div>
            <Button onClick={() => auth.signOut()} variant="contained" color="primary">
                サインアウト
            </Button>
        </div>
    )
}

export default SignOut