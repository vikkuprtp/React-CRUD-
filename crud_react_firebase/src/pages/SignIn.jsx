import React from 'react'
import {GoogleButton} from 'react-google-button';
import { UserAuth } from '../context/AuthContext';

const SignIn = () => {

  const {googleSignIn}=UserAuth();

  const handlegoogleSignIn=
  return (
    <div>
      <GoogleButton></GoogleButton>
    </div>
  )
}

export default SignIn
