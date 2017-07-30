import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import ServiceForm from '../components/ServiceForm.jsx'

class ServiceFormPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        /*this.state = {value: 2};*/

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
        this.changeUser = this.changeUser.bind(this);

    }
    

    /*handleChange = (event, index, value) => this.setState({value});
     */


    processForm(event) {
        event.preventDefault();

        const name = encodeURIComponent(this.state.user.name);
        const calendar = encodeURIComponent(this.state.user.calendar);
        const pet_name = encodeURIComponent(this.state.user.pet_name);
        const temperament = encodeURIComponent(this.state.user.temperament);
        const medications = encodeURIComponent(this.state.user.medications);
        const event_notes = encodeURIComponent(this.state.user.event_notes);
        const options = encodeURIComponent(this.state.user.options);

        const xhr = new XMLHttpRequest();
        xhr.open('post', '/auth/service');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {

                this.setState({
                    errors: {}
                });

                // localStorage.setItem('successMessage'), xhr.response.message);

                console.log(this.context);
                this.context.router.history.replace('/login');

            } else {

                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;

                this.setState({
                    errors
                });
            }
        });
        xhr.send(formData)
    }

    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    render() {
        return (
            <ServiceFormPage
			onSubmit={this.processForm}
			handleChange={this.handleChange}
			/>
        );
    }

}

ServiceFormPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default ServiceFormPage;