import React from 'react';

import SignUp from '../../components/sign-up/sign-up.component';

import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-sign-up.component.scss';

const SignInSignUp = () => (
    <div className='sign-in-sign-up'>
        <SignIn />
        <SignUp/>
    </div>
);

export default SignInSignUp;
