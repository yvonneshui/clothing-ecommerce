import React, { Component } from 'react'
import FormInput from '../form-input/FormInput'
import Button from '../custom-button/Button'

import { auth, signInWithGoogle } from '../../firebase/firebase.util'

import './SignIn.styles.scss'

export default class SignIn extends Component {
	constructor(){
		super()

	this.state={
		email:'',
		password:''
	}
	}

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

	handleChange=(e)=>{
		const {value,name}=e.target
		this.setState({[name]:value})
	}

	render() {
		return (
			<div className="sign-in">
				<h2>I have an account</h2>
				<span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
					<FormInput 
					type="email"
					name='email' 
					label='email'
					value={this.state.email} 
					handleChange={this.handleChange} 
					required/>

					<FormInput 
					type="password" 
					name='password' 
					label='password'
					value={this.state.password} 
					handleChange={this.handleChange}  
					required/>

				<div className="buttons">
					<Button type='submit' >Sign in</Button>
					<Button onClick={signInWithGoogle} isGoogleSignIn>Google</Button>
				</div>
					
				</form>
			</div>
		)
	}
}
