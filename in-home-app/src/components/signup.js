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


//Note: Due to me experiencing some technical difficulties with react-router and being pressed for time, I was unable to assign each component to a separate page. The Sign Up Component and NavBar Component is what makes up the Signup/SignIn Page that I designed for the app. 