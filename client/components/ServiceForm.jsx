import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import InfiniteCalendar, {
  Calendar,
  withRange,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

const CalendarWithRange = withRange(Calendar);
var today = new Date()


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
							
							/>			
					</div>

		<div className="field-line">
			<InfiniteCalendar
				Component={withRange(Calendar)}
				name="calendar"
				
				
			/>
		</div>
		<div>
		<InfiniteCalendar
	width={200}
	height={200}
	selected={today}
	displayOptions={{
		layout: 'portrait',
		showHeader: true,
		showOverlay: true,
		showTodayHelper: true
	}}/>
		</div>

		<div className="field-line">
			<TextField
				floatingLabelText="Pet Name"
				name="pet_name"
				
			/>
		</div>

	<div className="field-line">
			<TextField
				floatingLabelText="Temperament"
				name="temperament"
				
			
			/>
		</div>

		<div className="field-line">
			<TextField
				floatingLabelText="Medications"
				name="medications"
				
				
			/>
		</div>

		<div className="field-line">
			<TextField
				floatingLabelText="Event Notes"
				name="event_notes"
				
				
			/>
		</div>

		<div className="field-line">
			<TextField
				floatingLabelText="Options"
				name="options"
				
				
			/>
		</div>

		<div className="button-line">
			<RaisedButton type="submit"
				label="Submit" primary />
		</div>
	</form>
</Card>
);

/*ServiceForm.propTypes= {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
};*/

export default ServiceForm;

				




