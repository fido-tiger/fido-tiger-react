import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const ContactUs = ({
	onSubmit,
	onChange,
	errors,
	user,
}) => (
		<Card className="container">
			<form action="/" onSubmit={onSubmit}>
					<h2 className="card-heading">Contact Us</h2>

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
							<TextField
									floatingLabelText="Email"
									name="email"
									errorText={errors.email}
									onChange={onChange}
									value={user.email}
							/>
					</div>

					<div className="field-line">
							<TextField
									floatingLabelText="Phone"
									name="phone"
									errorText={errors.phone}
									onChange={onChange}
									value={user.phone}
							/>
					</div>				

					<div className="field-line">
							<TextField
									floatingLabelText="Questions"
									name="question"
									errorText={errors.question}
									onChange={onChange}
									value={user.question}
							/>			
					</div>
					
					<div className="button-line">
							<RaisedButton type="submit" label="Submit" primary />
					</div>
					
			</form>
		</Card>							
);

ContactUs.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
};

export default ContactUs;

