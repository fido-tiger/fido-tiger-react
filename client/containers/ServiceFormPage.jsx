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
                dates: [],
                pet_name: '',
                temperament: '',
                medications: '',
                event_notes: '',
                options: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.calendarChange = this.calendarChange.bind(this);
        this.changeEndDate = this.changeEndDate.bind(this);

    }


    /*handleChange = (event, index, value) => this.setState({value});
     */


    processForm(event) {
        event.preventDefault();
        // console.log(event.target.start_date.value);
        console.log(this.state.user);
        const name = encodeURIComponent(event.target.name.value);
        const dates = encodeURIComponent(event.target.calendar.value);
        const pet_name = encodeURIComponent(event.target.pet_name.value);
        const temperament = encodeURIComponent(event.target.temperament.value);
        const medications = encodeURIComponent(event.target.medications.value);
        const event_notes = encodeURIComponent(event.target.event_notes.value);
        const options = encodeURIComponent(event.target.options.value);
        const formData = `name=${name}&dates=${dates}&pet_name=${pet_name}&temperament=${temperament}&medications=${medications}&event_notes=${event_notes}&options=${options}`;



        const xhr = new XMLHttpRequest();
        xhr.open('post', '/client/service');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
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

                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;

                this.setState({
                    errors
                });
            }
        });
        xhr.send(formData)
    }

    /**
     * Change the user object.
     *
     * @param {object} event - the JavaScript event object
     */
    changeUser(event) {
        console.log(event.target);
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
    	val.push(event);
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
			onCalendarChange={this.calendarChange}
			onEndDateChange={this.changeEndDate}
			errors={this.state.errors}
			user={this.state.user}
			/>

        );
    }

}

ServiceFormPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default ServiceFormPage;