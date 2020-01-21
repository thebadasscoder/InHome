import React, { Component } from 'react';
import '../stylesheets/components/_navbar.scss';


class Navbar extends Component {
	render () {
		return (
			<div className="in-home-navbar-page">
			  <h2 className="in-home-title">You were born to make a <br/> difference.</h2>
				<nav className="in-home-navbar"> 
					<a href="#" className="sign-in-link">Sign in</a> 
					<a href="#" className="sign-up-link">Sign up</a>
					<a href="#" className="forgot-link">Forgot</a> 
					<span className="navbar-arrow"></span>
				</nav> 
			</div> 
		)
	}
}

export default Navbar;