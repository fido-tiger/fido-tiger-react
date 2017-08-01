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

const styles = {
  customWidth: {
    width: 200,
  },
};

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
				width={500}
				height={350}
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
	errors: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
};

export default ServiceForm;

				




