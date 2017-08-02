import React from 'react';
import Auth from '../modules/Auth';
import { Link, Route, Redirect } from 'react-router-dom';

import { Card, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const homeCardStyle = {
  width: '97%',
  margin:'15px',
  padding:'7px',
   textAlign: 'left',
};

const ServiceRequest = () => (
  <div>
  <Card style={homeCardStyle} className="container">
    <CardTitle title="Service Request" subtitle='"My Favorite Pet App!"' />    
    <div className="col-sm-8">
    <h3>Make a Service Request</h3>
    </div>
  </Card>
  <Card style={homeCardStyle} className="container">
  <div>
  <h2>More Stuff</h2>
  </div>
  </Card>
  </div>
);

export default ServiceRequest;