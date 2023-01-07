import React, { useState} from 'react'

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { 
    createAuthUserWithEmailAndPassword,
createUserDocumentFromAuth } 
from '../../utils/firebase/firebase.utils';

import {SignUpContainer} from './sign-up-form.styles.jsx';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetFields = () => {
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async(event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFields()
        } catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert("Email is already in use")
            } else {
                console.log(error, 'user email and password error')
            }
        }
    }

  return (
    <SignUpContainer>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput 
            label='Display Name'
            type='text'
            onChange={handleChange}
            name='displayName'
            value={displayName}
            required/>

            <FormInput 
            label='Email'
            type='email'
            onChange={handleChange}
            name='email'
            value={email}
            required/>

            <FormInput 
            label='Password'
            type='password'
            onChange={handleChange}
            name='password'
            value={password}
            required/>
            <FormInput 
            label='Confirm Password'
            type='password'
            onChange={handleChange}
            name='confirmPassword'
            value={confirmPassword}
            required/>
            <Button type='submit'>Sign Up</Button>
        </form>
    </SignUpContainer>
  )
}

export default SignUpForm