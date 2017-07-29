import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const NewClientForm = ({
	onSubmit,
	onChange, 
	errors,
	user,
}) => (
	<Card className="container">
		<form action="/" onSubmit={onSubmit}>
			<h2 className="card-heading">Sign Up</h2>

		{/*	{errors.summary && <p className="error-message">
				{errors.summary}</p>}*/}

			<div className="field-line">
				<TextField
					floatingLabelText="First Name"
					name="fname"
					// errorText={errors.fname}
					onChange={onChange}
					value={user.fname}
				/>
			</div>
			
			<div className="field-line">
				<TextField
					floatingLabelText="Last Name"
					name="lname"
					// errorText={errors.lname}
					onChange={onChange}
					value={user.lname}
				/>
			</div>

			<div className="field-line">
				<TextField
					floatingLabelText="Street Address"
					name="strtaddy"
					// errorText={errors.address}
					onChange={onChange}
					value={user.address}
				/>
			</div>

			<div className="field-line">
				<TextField
					floatingLabelText="City"
					name="city"
					// errorText={errors.city}
					onChange={onChange}
					value={user.city}
				/>
			</div>

			<div className="field-line">
				<TextField
					floatingLabelText="State"
					name="state"
					onChange={onChange}
					value={user.state}
				/>
			</div>
			
			<div className="field-line">
				<TextField
					floatingLabelText="Zip Code"
					name="zip"
					// errorText={errors.zip}
					onChange={onChange}
					value={user.zip}
				/>
			</div>
			
			<div className="field-line">
				<TextField
					floatingLabelText="Phone Number"
					name="phone"
					// errorText={errors.phone}
					onChange={onChange}
					value={user.phone}
				/>
			</div>

			<div className="field-line">
				<TextField
					floatingLabelText="Email"
					name="email"
					// errorText={errors.email}
					onChange={onChange}
					value={user.email}
				/>
			</div>

			<div className="button-line">
							<RaisedButton type="submit" label="Submit" primary />
			</div>

		</form>
	</Card>		

);

NewClientForm.PropTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	// errors: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
};

export default NewClientForm;

















