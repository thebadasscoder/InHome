import  React , { Component } from 'react'; 

// Font-Icons 
import Logo from '../assets/in-home-logo.png';
import Home from '../assets/home.svg';
import Chat from '../assets/chat.svg';
import Settings from '../assets/gear.svg'; 
import Logout from '../assets/logout.svg';

//Stylesheets
import '../stylesheets/components/_sidebar.scss';

class Sidebar extends Component {
	render () {
		return (
			<div className="in-home-sidebar"> 
				<div className="sidebar">
					<img src={Logo} className="in-home-sidebar-logo" alt="in-home-logo"/>
					<div className="in-home-sidebar-font">
						<span><img src={Home} className="in-home-sidebar-home-icon" alt="in-home-sidebar-home-icon"/></span>
						<span><img src={Chat} className="in-home-sidebar-chat-icon" alt="in-home-sidebar-chat-icon"/></span>
						<span><img src={Settings} className="in-home-sidebar-gear-icon" alt="in-home-sidebar-gear-icon"/></span>
						<span><img src={Logout} className="in-home-sidebar-logout-icon" alt="in-home-sidebar-gear-icon"/></span>
					</div>
				</div> 
			</div> 
		)
	}
}

export default Sidebar;