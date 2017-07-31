import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import NewClientForm from '../components/NewClientForm.jsx';

class NewClientFormPage extends React.Component {

    constructor(props) {
        super(props);

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
                lname: '',
                address: '',
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

        const name = encodeURIComponent(event.target.first_name.value);
        const lname = encodeURIComponent(event.target.last_name.value);
        const address = encodeURIComponent(event.target.street_address.value);
        const city = encodeURIComponent(event.target.city.value);
        const state = encodeURIComponent(event.target.state.value);
        const zip = encodeURIComponent(event.target.zip_code.value);
        const phone = encodeURIComponent(event.target.phone.value);
        const email = encodeURIComponent(event.target.email.value);
        const formData = `first_name=${name}&last_name=${name}&street_address=${address}&city=${city}&state=${state}&zip_code=${zip}&phone=${phone}&email==${email}`;
        const self = this;

        console.log("FNAME: " + event.target.name.value);

        const xhr = new XMLHttpRequest();

        xhr.open('post', '/auth/newclient');

        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                // success

                this.setState({

                    errors: {}
                });

                localStorage.setItem('successMessage', xhr.response.message);

                console.log(this.content);

                this.context.router.history.replace('dashboard');
            } else {
                // failure

                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;


                this.setState({
                    errors
                });
            }
        });
        xhr.send(formData);

    }


    changeUser(event) {
        const field = event.target.fname + " " + event.target.lname;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }


    render() {
        console.log('ERRORS:', this.state.errors);
        return (
            <NewClientForm
				onSubmit={this.processForm}
				onChange={this.changeUser}
				errors={this.state.errors}
				user={this.state.user}
			/>
        );
    }

}




export default NewClientFormPage;