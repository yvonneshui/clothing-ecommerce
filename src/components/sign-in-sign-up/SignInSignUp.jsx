import React from 'react'
import SignIn from '../sign-in/SignIn'
import SignUp from '../sign-up/SignUp'

import './SignInSignUp.styles.scss'

function SignInSignUp() {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
		)
}

export default SignInSignUp