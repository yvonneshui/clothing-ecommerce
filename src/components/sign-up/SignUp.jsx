import React from 'react'

import FormInput from '../form-input/FormInput'
import Button from '../custom-button/Button'

import { auth,createUserProfileDocument } from '../../firebase/firebase.util'

import './SignUp.styles.scss'


class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName:'',
			email:'',
			password:'',
			confirmPassword:''
		};
	}

	handleSubmit=async e=>{
		e.preventDefault()

		const {displayName,email,password,confirmPassword} =this.state

		if(password!== confirmPassword){
			alert('passwords dont match!')
			return
		}

		try{
			const{user}=await auth.createUserWithEmailAndPassword(email,password)

			await createUserProfileDocument(user,{displayName})

			this.setState({
			displayName:'',
			email:'',
			password:'',
			confirmPassword:''
			})

		}catch(err){
			console.log(err);
		}
	}

	handleChange=e=>{
		const {name,value}=e.target

		this.setState({[name]:value})//dynamically set state
	
	}

	render() {
		const {displayName,email,password,confirmPassword} =this.state
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput 
					type='text' 
					name="displayName" 
					value={displayName}
					onChange={this.handleChange}
					label='Display Name'
					required
					 />

					<FormInput 
					type='email' 
					name="email" 
					value={email}
					onChange={this.handleChange}
					label='Email'
					required
					 />

					 <FormInput 
					type='password' 
					name="password" 
					value={password}
					onChange={this.handleChange}
					label='Password'
					required
					 />

					<FormInput 
					type='confirmPassword' 
					name="confirmPassword" 
					value={confirmPassword}
					onChange={this.handleChange}
					label='ConfirmPassword'
					required
					 />
					 
					<Button type='submit'>Sign Up</Button>
				</form>
			</div>
		)
	}
}

export default SignUp;