import React from 'react';
import PropTypes from 'prop-types';
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
    withMultipleDates,
    defaultMultipleDateInterpolation
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';


// const CalendarWithRange = withRange(Calendar);
var today = new Date();

const styles = {
    customWidth: {
        width: 200,
    },
};
const serviceCardStyle = {
	margin: "50px",
	padding: "20px"
}

const ServiceForm = ({
    onSubmit,
    onChange,
    onCalendarChange,
    onEndDateChange,
    errors,
    user,
}) => (
    <Card style={serviceCardStyle} className="container">
	<form action ="/client/service" onSubmit={onSubmit}>
		<h2 className="card-heading">Services Form</h2>		
		<div className="field-line">
			<TextField
				floatingLabelText="Name"
				name="name"
				rowsMax = {2}
				onChange={onChange}
				value={user.name}	
			/>			
		</div>
		
		<div className="field-line">
			<TextField
				floatingLabelText="Pet Name"
				name="pet_name"
				rowsMax = {2}
				onChange={onChange}
				value={user.pet_name}				
			/>			
		</div>
		
		<div className="field-line">
		
			<InfiniteCalendar
				Component={withMultipleDates(Calendar)}
				name="calendar"	
				selected={[]}
				width={500}
				height={350}				
				onSelect={function(val){
					onCalendarChange(val);
					console.log(val)
				}}
				displayOptions={{
					layout: 'portrait',
					showHeader: true,
					showOverlay: true,
					showTodayHelper: true
				}}
				keyboardSupport={false}
			 	interpolateSelection={defaultMultipleDateInterpolation}
			 	selected={[]}
			/>

		</div>
		<div className="field-line">
			
			        <DatePicker
			        name="start_date"  
			        floatingLabelText="Start Date" 			        
			        />
			  
			        <DatePicker 
			        name="end_date"
			        floatingLabelText="End Date" />

		</div>
		


		<div className="field-line">
			<DropDownMenu name="medications"
			onChange={onChange}>
				<MenuItem value={1} primaryText="Anti-Anxiety" />
				<MenuItem value={2} primaryText="Pain Killer" />
				<MenuItem value={3} primaryText="Glucosamine" />
				<MenuItem value={4} primaryText="Daily Vitamin" />
				<MenuItem value={5} primaryText= "Cancer Treatment" />
			</DropDownMenu>
		</div>
		

		<div className="field-line">
			<DropDownMenu  name="options"
			onChange={onChange}>
				<MenuItem value={1} primaryText="Walking" />
				<MenuItem value={2} primaryText="Pet-Taxi" />
				<MenuItem value={3} primaryText="Pet-Sitting" />
				<MenuItem value={4} primaryText="Feeding" />
			</DropDownMenu>
		</div>
		

		<div className="text-field">
			<TextField onChange={onChange} name="event_notes"				
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

ServiceForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onCalendarChange: PropTypes.func.isRequired,
    onEndDateChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default ServiceForm;