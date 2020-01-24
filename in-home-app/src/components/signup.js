import React, { Component } from 'react';
import Logo from '../assets/in-home-logo.png';
import '../stylesheets/components/_signup.scss';

class Signup extends Component {
	render () {
		return (
			<div className="in-home-signup-page">
				<a href="/"><img src={Logo} className="in-home-logo" alt="in-home-logo"/></a> 
			</div> 
		);
	}
}

export default Signup;