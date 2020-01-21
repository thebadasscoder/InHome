import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/in-home-logo.png';
import '../stylesheets/components/_signup.scss';

class Signup extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {username: '', password: '', repeatPassword: '', emailAddress: ''}
	// 	this.handleUsernameChange= this.handleUsernameChange.bind(this);
	// 	this.handlePasswordChange= this.handlePasswordChange.bind(this);
	// 	this.handleEmailAddressChange= this.handleEmailAddressChange.bind(this);
	// 	this.handleSubmit = this.handleSubmit.bind(this);
	// }

	// handleUsernameChange(e) {
	// 	this.setState({username: e.target.value});
	// }

	// handlePasswordChange(e) {
	// 	this.setState({password: e.target.value});
	// }

	// handleEmailAddressChange(e) {
	// 	this.setState({emailAddress: e.target.value});
	// }

	// handleSubmit(e){
	// 	e.preventDefault();
	// 	alert("You're in!");
	// }

	render () {
		return (
			<div className="grid-container">
				<div className="in-home-signup-page">
				<a href="/"><img src={Logo} className="in-home-logo" alt="in-home-logo"/></a>
				</div> 
			</div> 
		);
	}
}

export default Signup;