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
  margin:'15px',
  padding:'7px',
  textAlign: 'left',
};
const homePageStyle = {

 
};
const HomePage = () => (
  <Paper style={homePaperStyle} zDepth={1}>
  <Card style={homeCardStyle} className="container">
    <CardTitle title="Fido and Tiger Pet Sitting" subtitle='"My Favorite Pet App!"' />    
    <div style={homePageStyle} className="col-sm-3">
    <h3>About Us</h3>
    <h4>Fido and Tiger is a personalized pet care service provider.  From walks, to feeding to pet delivery services, we are here to help you and your pet.</h4>
      <p>Customize your service!  If you want playtimes, walks (long or short), medicine dispensed, or your pets fed, we are here for you.  Our professional staff is reliable, friendly, and trustworthy.  We know your pet means the world to you and we want to assist you in giving them the best care possible. Just let us know what you need and times that you desire and we will set up a package for you! </p>
    
    </div>
  </Card>
  <Card style={homeCardStyle} className="container">
  <div style={homePageStyle}>
  <h2>More Stuff</h2>
  </div>
  </Card>
  </Paper>
);

export default HomePage;
