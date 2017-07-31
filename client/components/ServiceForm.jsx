import React, { PropTypes } from 'react';
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
		<Divider/>
		<div className="field-line">
			<TextField
				floatingLabelText="Pet Name"
				name="pet_name"
				rowsMax = {2}
				onChange={onChange}			
			/>			
		</div>
		<Divider />
		<div className="field-line">

			<InfiniteCalendar
				Component={withRange(Calendar)}
				name="calendar"	
				width={200}
				height={200}
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
		<Divider />

		{/*<div className="field-line">
			<TextField
				onChange={this.handleChange}
				floatingLabelText="Pet Name"
				name="pet_name"
				
			/>
		</div>*/}
		<Divider />

		
		<Divider />

		<div className="field-line">
			<DropDownMenu value={this.state.value} name="medications"
			onChange={onChange} label="Medications">
				<MenuItem value={1} label="Anti-Anxiety" />
				<MenuItem value={2} label="Pain Killer" />
				<MenuItem value={3} label="Glucosamine" />
				<MenuItem value={4} label="Daily Vitamin" />
				<MenuItem value={5} label= "Cancer Treatment" />
			</DropDownMenu>
		</div>
		<Divider />

		<div className="field-line">
			<DropDownMenu value={this.state.value} name="options"
			onChange={onChange} label="Pet Options">
				<MenuItem value={1} label="Walking" />
				<MenuItem value={2} label="Pet-Taxi" />
				<MenuItem value={3} label="Pet-Sitting" />
				<MenuItem value={4} label="Feeding" />
			</DropDownMenu>
		</div>
		<Divider />

		<div className="text-field">
			<TextField onChange={onChange} name="event_notes"
				floatingLabelText="Event Notes"
				name="event_notes"
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

				




