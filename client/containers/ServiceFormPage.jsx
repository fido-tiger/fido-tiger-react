import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import ServiceForm from '../components/ServiceForm.jsx'

class ServiceForm extends React.Component {

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
			name: '',
			calendar: '',
			pet_name: '',
			temperament: '',
			medications: '',
			event_notes: '',
			options: '',
		}
	};

	this.processForm = this.processForm.bind(this);


	}

















}
