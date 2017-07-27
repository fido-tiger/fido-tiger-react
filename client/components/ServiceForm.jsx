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
<InfiniteCalendar
	width={200}
	height={400}
	selected={today}
	displayOptions={{
		layout: 'portrait',
		showHeader: true,
		showOverlay: true,
		showTodayHelper: true
	}}
	/>
const ServiceForm = ({
	onSubmit,
	onChange,
	errors,
	user,
}) => (
<Card className="container">
	<form action ="/client/service" onSubmit={onSubmit}>
		<h2 className="card-heading">Services Form</h2>

		{errors.summary && <p className="error-message">{errors.summary}</p>}

					<div className="field-line">
							<TextField
									floatingLabelText="Name"
									name="name"
									errorText={errors.name}
									onChange={onChange}
									value={user.name}
							/>			
					</div>

		<div className="field-line">
			<InfiniteCalendar
				Component={withRange(Calendar)}
				name="calendar"
				errorText={errors.calendar}
				onChange={onChange}
				value={user.calendar}
			/>
		</div>

		<div className="field-line">
			<TextField
				floatingLabelText="Pet Name"
				name="pet_name"
				errorText={errors.pet_name}
				onChange={onChange}
				value={user.pet_name}
			/>
		</div>

		{*needs to be drop down form*}
		<div className="field-line">
			<TextField
				floatingLabelText="Temperament"
				name="temperament"
				errorText={errors.temperament}
				onChange={onChange}
				value={user.temperament}
			/>
		</div>

		<div className="field-line">
			<TextField
				floatingLabelText="Medications"
				name="medications"
				errorText={errors.medications}
				onChange={onChange}
				value={user.medications}
			/>
		</div>

		<div className="field-line">
			<TextField
				floatingLabelText="Event Notes"
				name="event_notes"
				errorText={errors.event_notes}
				onChange={onChange}
				value={user.event_notes}
			/>
		</div>

		<div className="field-line">
			<TextField
				floatingLabelText="Options"
				name="options"
				errorText={errors.options}
				onChange={onChange}
				value={user.options}
			/>
		</div>

		<div className="button-line">
			<RaisedButton type="submit"
				label="Submit" primary />
		</div>
	</form>
</Card>
);

ServiceForm.propTypes= {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
};

export default ServiceForm;

				



























)