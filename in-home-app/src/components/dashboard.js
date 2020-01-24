import React, { Component } from 'react';

import Sidebar from '../components/sidebar.js';
import Modal from '../components/modal.js';

import axios from 'axios';
import Avatar from '../assets/avatar.png';
import '../stylesheets/components/_dashboard.scss';

class Dashboard extends Component {
	constructor(props){
		super(props);

		this.state = {
			orders: [], 
			show: false
		}
	}

	componentDidMount (){ 
		//MOCK API + GET ORDERS 
		axios.get('https://5e2752de6eeb440014536b4f.mockapi.io/api/v1/orders')
		.then((response) => {
			const orders = response.data
			this.setState({orders: orders})
		})
		.catch((error) => {
			console.log(error);
		})

		// //SHOW ORDER ITEMS
		// axios.get(`https://5e2752de6eeb440014536b4f.mockapi.io/api/v1/orders${this.state.orders.id}` + '/items')
		// .then((response) => {
		// 	console.log(resoponse)
		// 	// const orders = response.data
		// 	// this.setState({orders: orders})
		// })
		// .catch((error) => {
		// 	throw error;
		// })

		// //DELETE ORDER 
		// axios.delete(`https://5e2752de6eeb440014536b4f.mockapi.io/api/v1/orders/${this.state.id}`)
		// .then((response) => {
		// 	const orders = response.data
		// 	this.setState({orders: orders})
		// })
		// .catch((error) => {
		// 	throw error;
		// })

		// //CREATE NEW ORDER 

		// axios.delete(`https://5e2752de6eeb440014536b4f.mockapi.io/api/v1/orders/${this.state.id}`)
		// .then((response) => {
		// 	const orders = response.data
		// 	this.setState({orders: orders})
		// })
		// .catch((error) => {
		// 	throw error;
		// })

		// //EDIT ORDERS 

		// axios.delete(`https://5e2752de6eeb440014536b4f.mockapi.io/api/v1/orders/${this.state.id}`)
		// .then((response) => {
		// 	const orders = response.data
		// 	this.setState({orders: orders})
		// })
		// .catch((error) => {
		// 	throw error;
		// })



	}

	showModal = e => {
		this.setState({show: !this.state.show});
	}

	renderOrders () {
		return this.state.orders.map((order, index) => {
			return (
				<tr className="in-home-orders" key={order.id}> 
					<td  className="in-home-date">{order.date}</td> 
					<td  className="in-home-id"><a href="#" onClick={e => {this.showModal(e)}}>{order.id}</a></td> 
					<td  className="in-home-status">{order.status}</td> 
				</tr> 
			)
		}) 
	}

	render () { 
		return (
			<div className="in-home-dashboard">

				<div className="in-home-sidebar-section">
					<Sidebar/>
				</div> 

				<div className="in-home-orders-section">
					<div className="in-home-order-list"> 
					<table> 
						<thead> 
							<tr>
								<th className="in-home-table-heading">Date</th>
								<th className="in-home-table-heading">Order#</th>
								<th className="in-home-table-heading">Status</th>
							</tr>
						</thead>
					</table> 

					<table>
						<tbody> 
							{this.renderOrders()}
						</tbody> 
					</table> 
					</div> 
				</div>

				<div className="in-home-header-section">
					<h2 className="in-home-title"> Welcome Back, Emily! </h2> 
					<img src={Avatar} alt="in-home-avatar" className="in-home-avatar"/><span className="dot"></span>
				</div>			

				<div className="in-home-modal-section">
					<Modal onClose={this.showModal} show={this.state.show}>
						<div className="in-home-modal-body">
						</div>
					</Modal>
				</div> 
			</div>
		)
	}
}

export default Dashboard;