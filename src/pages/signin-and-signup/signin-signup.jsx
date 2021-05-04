import React from 'react';

import SignIn from '../../components/signin/signin';
import SignUp from '../../components/signup/signup';

import './signin-signup.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;