import React from 'react';
import PropTypes from 'prop-types'
import { render } from 'react-dom';
import { Card, CardTitle } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

import InfiniteCalendar, {
  Calendar,
  withRange,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';


const CalendarWithRange = withRange(Calendar);
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);



// handleChange = (event, index, value) => this.setState({value});

const styles = {
  customWidth: {
    width: 200,
  },
};
const serviceCardStyle = {
	padding: "20px"
}
const instructionsStyle = {
	textAlign: "left"
}


class ServiceForm extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.state = {
        	medicationsvalue:1,
        	activityvalue:1,
        	start_date: null,
        	end_date: null
        }
        // this.updateDropdown = this.updateDropdown.bind(this);
        this.updateMeds = this.updateMeds.bind(this);
        this.updateActivity = this.updateActivity.bind(this);
        this.updateStart = this.updateStart.bind(this);
        this.updateEnd = this.updateEnd.bind(this);

	}

updateMeds(event, key) {
	// this.props.onChange(event);
	console.log(arguments);
	console.log(event.target.name);
		this.setState({
            medicationsvalue: key+1})
}

updateActivity(event, key) {
	this.props.onChange(event);
	console.log(arguments);
	console.log(event.target.name);
	this.setState({
            activityvalue: key+1})
}
updateStart(event, key) {
	console.log(arguments);
	console.log(key);
	this.setState({
					start_date: key
	}, function(){
		console.log(this.state);
	});
}
updateEnd(event, key) {
	console.log(arguments);
	console.log(key);
	this.setState({
					end_date: key
	}, function(){
		console.log(this.state);
	});
}

	render () {
		return(
			<Card style={serviceCardStyle} className="container">
			<form action ="/client/service" onSubmit={this.props.onSubmit}>
				<h2 className="card-heading">Schedule Service</h2>		
				
					<TextField
						floatingLabelText="Name"
						name="name"
						rowsMax = {2}
						onChange={this.props.onChange}			
					/>			
					<br/>			
					<TextField
						floatingLabelText="Pet Name"
						name="pet_name"
						rowsMax = {2}
						onChange={this.props.onChange}			
					/>			
					<br/>		
				<div className="field-line">

{/*					<InfiniteCalendar
						Component={withRange(Calendar)}
						name="calendar"	
						width={500}
						height={350}
						selected={today}
						onChange={this.props.onChange}
						keyboardSupport={false}
						minDate={lastWeek}
						displayOptions={{
							layout: 'portrait',
							showHeader: true,
							showOverlay: true,
							showTodayHelper: true
							}}
					/>*/}

					<DatePicker 
					name="start_date" 
					floatingLabelText="Start Date" 
					onChange={this.updateStart}
					/>
					<TextField
						name="start_time"				
						type="time"
						onChange={this.props.onChange}
					/>			
					<br/>
					<DatePicker 
					name="end_date" 
					floatingLabelText="End Date"
					onChange={this.updateEnd} 
					/>
					<TextField
						name="end_time"				
						type="time"
						onChange={this.props.onChange}
					/>			
					<br/>
				</div>
				<br/>
				


				
					<DropDownMenu name="medications" value={this.state.medicationsvalue}
					onChange={this.updateMeds} autoWidth={true}>
						<MenuItem value={1} primaryText="Anti-Anxiety" />
						<MenuItem value={2} primaryText="Pain Killer" />
						<MenuItem value={3} primaryText="Glucosamine" />
						<MenuItem value={4} primaryText="Daily Vitamin" />
						<MenuItem value={5} primaryText= "Cancer Treatment" />
					</DropDownMenu>
					<br/>
				
				

				
					<DropDownMenu  name="activity" value={this.state.activityvalue}
					onChange={this.updateActivity} autoWidth={true}>
						<MenuItem value={1} primaryText="Walking" />
						<MenuItem value={2} primaryText="Pet-Taxi" />
						<MenuItem value={3} primaryText="Pet-Sitting" />
						<MenuItem value={4} primaryText="Feeding" />
					</DropDownMenu>
					<br/>
				
				

				
					<TextField onChange={this.props.onChange} name="event_notes"
						multiLine={true}
						rows={2}		
						rowsMax={6}
						floatingLabelText="Special Instructions"
						hintText="Notes"
						style={instructionsStyle}
					/>
					<br/>
				

				
					<RaisedButton type="submit"
						label="Submit" />
				
				</form>
			</Card>
); 

	}

}	


ServiceForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
};

export default ServiceForm; 

				




