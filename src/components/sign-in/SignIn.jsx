import React, { Component } from 'react'
import './SignIn.styles.scss'

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
					<input type="email" name='email' value={this.state.email} onChange={this.handleChange} required/>
					<label>Password:</label>
					<input type="password" name='password' value={this.state.password} onChange={this.handleChange}  required/>

					<input type='submit' value='submit Form'/>
				</form>
			</div>
		)
	}
}
