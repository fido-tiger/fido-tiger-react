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
            shouldSubmit: false,
            user: {
                name: '',
                start_date: null,
                start_time: null,
                end_date: null,
                end_time: null, 
                pet_name: '',
                activityvalue: '',
                medicationsvalue: '',
                event_notes: '',
                
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);



    }

    shouldComponentUpdate(nextProps, nextState) {

        return this.state.shouldSubmit;
    }


    processForm(event) {
        event.preventDefault();
        console.log(event.target.start_date.value);
        console.log(event.target);
        console.log(this.state.user);
        const name = encodeURIComponent(event.target.name.value);
        const start_date = encodeURIComponent(event.target.start_date.value);
        const start_time = encodeURIComponent(event.target.start_time.value);
        const end_date = encodeURIComponent(event.target.end_date.value);
        const end_time = encodeURIComponent(event.target.end_time.value);
        const pet_name = encodeURIComponent(event.target.pet_name.value);
        const activity_value = 1;
        const medications_value = 1;
        const event_notes = encodeURIComponent(event.target.event_notes.value);
        const formData = `name=${name}&start_date=${start_date}&start_time=${start_time}&end_date=${end_date}&end_time=${end_time}&pet_name=${pet_name}&activity_value=${activity_value}&medications_value=${medications_value}&event_notes=${event_notes}`;

        console.log(formData);

        const xhr = new XMLHttpRequest();
        xhr.open('post', '/auth/service');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {

                this.setState({
                    errors: {}
                });

                // localStorage.setItem('successMessage'), xhr.response.message);

                console.log(this.context);
                this.context.router.history.push('/client');

            } else {
            	console.log(xhr.response.errors);

                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;

                this.setState({
                    errors
                });
            }
        });
        xhr.send(formData)
        this.setState({
            shouldSubmit: true
        });
    }




    /**
     * Change the user object.
     *
     * @param {object} event - the JavaScript event object
     */
    changeUser(event) {
        console.log(event.target.name);
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user
        });
    }

    changeStartDate(event, date) {
        this.setState({
            start_date: date,
        });
    }


    changeEndDate(event, date) {
        this.setState({
            end_date: date,
        });
    }
    calendarChange(event) {
        console.log(this.state.user.dates);
        var val = this.state.user.dates;
        // val.push(event);
        console.log(val);
        // this.setState({
        // 	dates: event
        // });
    }





    render() {
        return (
            <ServiceForm
			onSubmit={this.processForm}
			onChange={this.changeUser}
			errors={this.state.errors}
			/>

        );
    }

}

ServiceFormPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default ServiceFormPage;