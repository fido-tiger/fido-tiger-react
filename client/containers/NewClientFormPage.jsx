import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import NewClientForm from '../components/NewClientForm.jsx';

class NewClientFormPage extends React.Component {

	constructor(props, context) {
		super(props, context);

		const storedMessage = localStorage.getItem('successMessage');
    	let successMessage = '';

    	if (storedMessage) {
      		successMessage = storedMessage;
      		localStorage.removeItem('successMessage');
    	}	

		this.state = {
			errors: {},
			successMessage,
			user: {
				fname: '',
				lname: '',
				strtaddy: '',
				city: '',
				state: '',
				zip: '',
				phone: '',
				email: ''
			}
		};

		this.processForm = this.processForm.bind(this);
		this.changeUser = this.changeUser.bind(this);
	}

	processForm(event) {
		event.preventDefault();

		const fname = encodeURIComponent(this.state.user.fname);
		const lname = encodeURIComponent(this.state.user.lname);
		const strtaddy = encodeURIComponent(this.state.user.strtaddy);
		const city = encodeURIComponent(this.state.user.city);
		const state = encodeURIComponent(this.state.user.state);
		const zip = encodeURIComponent(this.state.user.zip);
		const phone = encodeURIComponent(this.state.user.phone);
		const email = encodeURIComponent(this.state.user.email);
		const formData = `fname=${fname}&lname=${lname}&strtaddy=${strtaddy}&city=${city}&state=${state}&zip=${zip}&phone=${phone}&email==${email}`;

	// 	const xhr = new XMLHttpRequest();
	// 	xhr.open('post', '/auth/login');
	// 	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	// 	xhr.responseType = 'json';
	// 	xhr.addEventListener('load', () => {
	// 		if (xhr.status === 200) {
	// 			// success

	// 			this.setState({
	// 				errors: {}
	// 			});

	// 			localStorage.setItem('successMessage', xhr.response.message);

	// 			console.log(this.content);
	// 			this.context.router.history.replace('login');
	// 		} else {
	// 			// failure

	// 			const errors = xhr.response.errors ? xhr.response.errors : {};
	// 			errors.summary = xhr.response.message;

	// 			this.setState({
	// 				errors
	// 			});
	// 		}
	// 	});
	// 	xhr.send(formData);
	 }

	changeUser(event) {
		const field = event.target.fname & lname;
		const user = this.state.user;
		user[field] = event.target.value;

		this.setState({
			user
		});
	}


	render() {
		console.log(this.state.errors);
		return (
			<NewClientForm
				onSubmit={this.processForm}
				onChange={this.changeUser}
				// errors={this.state.errors}
				user={this.state.user}
			/>
		);
	}

}




export default NewClientForm;