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

class ServiceForm extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.state = {medicationsvalue:1,activityvalue:1}
        // this.updateDropdown = this.updateDropdown.bind(this);
        this.updateMeds = this.updateMeds.bind(this);
        this.updateActivity = this.updateActivity.bind(this);

	}

updateMeds(event, key) {
	this.props.onChange(event);
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

	render () {
		return(
			<Card className="container">
			<form action ="/client/service" onSubmit={this.props.onSubmit}>
				<h2 className="card-heading">Services Form</h2>		
				<div className="field-line">
					<TextField
						floatingLabelText="Name"
						name="name"
						rowsMax = {2}
						onChange={this.props.onChange}			
					/>			
				</div>
				
				<div className="field-line">
					<TextField
						floatingLabelText="Pet Name"
						name="pet_name"
						rowsMax = {2}
						onChange={this.props.onChange}			
					/>			
				</div>
				
				<div className="field-line">

					<InfiniteCalendar
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
					/>

				</div>
				


				<div className="field-line">
					<DropDownMenu name="medications" value={this.state.medicationsvalue}
					onChange={this.updateMeds} autoWidth={true}>
						<MenuItem value={1} primaryText="Anti-Anxiety" />
						<MenuItem value={2} primaryText="Pain Killer" />
						<MenuItem value={3} primaryText="Glucosamine" />
						<MenuItem value={4} primaryText="Daily Vitamin" />
						<MenuItem value={5} primaryText= "Cancer Treatment" />
					</DropDownMenu>
				</div>
				

				<div className="field-line">
					<DropDownMenu  name="activity" value={this.state.activityvalue}
					onChange={this.updateActivity} autoWidth={true}>
						<MenuItem value={1} primaryText="Walking" />
						<MenuItem value={2} primaryText="Pet-Taxi" />
						<MenuItem value={3} primaryText="Pet-Sitting" />
						<MenuItem value={4} primaryText="Feeding" />
					</DropDownMenu>
				</div>
				

				<div className="text-field">
					<TextField onChange={this.props.onChange} name="event_notes"
						multiLine={true}
						rows={4}		
						rowsMax={6}
					/>
				</div>

				<div className="button-line">
					<RaisedButton type="submit"
						label="Submit" />
				</div>
				</form>
			</Card>
); 

	}

}	


{/*		<div className="field-line">
			<table>
			  <tbody>
			    <tr>
			      <td>
			        <DatePicker
			        name="start_date"  
			        container="inline" 
			        value={user.start_date}
			        onChange={onStartDateChange}
			        floatingLabelText="Start Date" 			        
			        />
			      </td>
			      <td>
			        <DatePicker container="inline" floatingLabelText="End Date" />
			      </td>
			    </tr>
			  </tbody>
			</table>
		</div>
		*/}



ServiceForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
};

export default ServiceForm;

				




