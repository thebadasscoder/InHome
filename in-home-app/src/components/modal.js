import React, { Component } from 'react'; 

class Modal extends Component { 
	constructor(props){
		super(props);
	}

	onClose = e => {
		this.props.onClose && this.props.onClose(e);
	}

	render () {
		if(!this.props.show){
		 	return null;
		}
		return (
			<div className="in-home-modal"> 
				<div>{this.props.children}</div>
				<button onClick={e => {this.onClose()}}>close</button>
			</div> 
		)
	}
}

export default Modal;