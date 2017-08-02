import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const ncForm={
	marginTop:"50px"
}

const NewClientForm = ({
	onSubmit,
	onChange, 
	errors,
	user,
}) => (
	<Card className="container" style={ncForm}>
		<form action="/" onSubmit={onSubmit}>
			<h2 className="card-heading">Sign Up</h2>


			{errors.summary && <p className="error-message">
				{errors.summary}</p>}
				{errors.summary ? (<p className="error-message">
				  {errors.summary}</p>) : undefined}



			<div className="field-line">
				<TextField
					floatingLabelText="First Name"
					name="first_name"
					errorText={errors.name}
					onChange={onChange}
					/>
			</div>
			
			<div className="field-line">
				<TextField
					floatingLabelText="Last Name"
					name="last_name"
					errorText={errors.name}
					onChange={onChange}
					/>
			</div>

			<div className="field-line">
				<TextField
					floatingLabelText="Street Address"
					name="street_address"
					errorText={errors.address}
					onChange={onChange}
					/>
			</div>

			<div className="field-line">
				<TextField
					floatingLabelText="City"
					name="city"
					errorText={errors.city}
					onChange={onChange}
					/>
			</div>

			<div className="field-line">
				<TextField
					floatingLabelText="State"
					name="state"
					onChange={onChange}
					/>
			</div>
			
			<div className="field-line">
				<TextField
					floatingLabelText="Zip Code"
					name="zip_code"
					errorText={errors.zip}
					onChange={onChange}
					/>
			</div>
			
			<div className="field-line">
				<TextField
					floatingLabelText="Phone Number"
					name="phone"
					errorText={errors.phone}
					onChange={onChange}
					/>
			</div>

			<div className="button-line">
							<RaisedButton type="submit" label="Submit" primary />
			</div>

		</form>
	</Card>		

);

NewClientForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
};

export default NewClientForm;