import React, { Component } from 'react'
import './SignIn.styles.scss'
import FormInput from '../form-input/FormInput'
export default class SignIn extends Component {
	constructor(){
		super()

	this.state={
		email:'',
		password:''
	}
	}

	handleSubmit=(e)=>{
		e.preventDefault()
		this.setState({
			email:"",
			password:""
		})
	}

	handleChange=(e)=>{
		const {value,name}=e.target
		this.setState({[name]:value})
	}

	render() {
		return (
			<div className="sign-in">
				<h2>I have an account</h2>
				<span>Sign in with email and password</span>

				<form>
					<label>Email:</label>
					<FormInput 
					type="email"
					name='email' 
					label='email'
					value={this.state.email} 
					handleChange={this.handleChange} 
					required/>

					<label>Password:</label>
					<FormInput 
					type="password" 
					name='password' 
					label='password'
					value={this.state.password} 
					handleChange={this.handleChange}  
					required/>

					<input type='submit' value='submit Form'/>
				</form>
			</div>
		)
	}
}
