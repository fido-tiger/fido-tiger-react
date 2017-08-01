
import React from 'react';
import PropTypes from 'prop-types';
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



const ServiceForm = ({
	onSubmit,
	onChange,
	errors,
	user,
}) => (
<Card className="container">
	<form action ="/client/service" onSubmit={onSubmit}>
		<h2 className="card-heading">Services Form</h2>		
		<div className="field-line">
			<TextField
				floatingLabelText="Name"
				name="name"
				rowsMax = {2}
				onChange={onChange}			
			/>			
		</div>
		
		<div className="field-line">
			<TextField
				floatingLabelText="Pet Name"
				name="pet_name"
				rowsMax = {2}
				onChange={onChange}			
			/>			
		</div>
		
		<div className="field-line">

			<InfiniteCalendar
				Component={withRange(Calendar)}
				name="calendar"	
				width={300}
				height={250}
				selected={today}
				onChange={onChange}
				displayOptions={{
					layout: 'portrait',
					showHeader: true,
					showOverlay: true,
					showTodayHelper: true
					}}
			/>

		</div>
		


		<div className="field-line">
			<DropDownMenu name="medications" floatingLabelText="Medications"
			onChange={onChange}>
				<MenuItem value={1} label="Anti-Anxiety" />
				<MenuItem value={2} label="Pain Killer" />
				<MenuItem value={3} label="Glucosamine" />
				<MenuItem value={4} label="Daily Vitamin" />
				<MenuItem value={5} label= "Cancer Treatment" />
			</DropDownMenu>
		</div>
		

		<div className="field-line">
			<DropDownMenu  name="options" floatingLabelText="Pet Options"
			onChange={onChange}>
				<MenuItem value={1} label="Walking" />
				<MenuItem value={2} label="Pet-Taxi" />
				<MenuItem value={3} label="Pet-Sitting" />
				<MenuItem value={4} label="Feeding" />
			</DropDownMenu>
		</div>
		

		<div className="text-field">
			<TextField onChange={onChange} name="event_notes"
				floatingLabelText="Event Notes"
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
	errors: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
};

export default ServiceForm;