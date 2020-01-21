import React, { Component } from 'react';
import '../stylesheets/components/_navbar.scss';

class Navbar extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password :''
		};

		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleUsernameChange(e){
		this.setState({username: e.target.value});
	}

	handlePasswordChange(e){
		this.setState({password: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
	}

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

				<div className="sign-in-form-container"> 
		      <form className="in-home-form" onSubmit={this.handleSubmit}> 
		        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange}/>
		        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
		        <input type="submit" value="Sign in"/>
		      </form> 
		    </div>  
			</div> 
		)
	}
}

export default Navbar;