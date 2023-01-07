import React from 'react'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import {AuthenticationContainer} from './authentication.styles.jsx'

const Authentication = () => {
  console.log('Authentication')
  return (
    <AuthenticationContainer>
        <h1>Sign In Page</h1>
        <SignUpForm/>
        <SignInForm/>
    </AuthenticationContainer>
  )
}

export default Authentication;

