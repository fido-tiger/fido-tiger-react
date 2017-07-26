import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
const homePaperStyle = {
    height: '100vh',
    width: '100%',
    margin: 0,
    textAlign: 'center',
    display: 'inline-block',
};
const homeCardStyle = {
  width: '97%',
  margin:'15px',
  padding:'7px',
   textAlign: 'left',
};

const ClientDash = () => (
  <Paper style={homePaperStyle} zDepth={1}>
  <Card style={homeCardStyle} className="container">
    <CardTitle title="User Dashboard" subtitle='"My Favorite Pet App!"' />    
    <div className="col-sm-8">
    <h3>Hello User</h3>
    
    </div>
  </Card>
  <Card style={homeCardStyle} className="container">
  <div>
  <h2>More Stuff</h2>
  </div>
  </Card>
  </Paper>
);

export default ClientDash;


