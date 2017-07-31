import React from 'react';
import Auth from '../modules/Auth';
import PropTypes from 'prop-types';
import { Link, Route, Redirect } from 'react-router-dom';
// Material UI
import { Card, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import List, {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';
// Component Imports
import NewClientFormPage from '../containers/NewClientFormPage';

/*    CSS
≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
const homeCardStyle = {
  width: '97%',
  margin:'15px',
  padding:'7px',
  textAlign: 'left',
};
const avatarStyle = {
  margin: '5px'
};
/*    Conditional
≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
// const isRegistered = props.registered;
/*    Component
≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠*/
const ClientDash = ({secretData, name, email, registered}) => (
  <div>
  <Card style={homeCardStyle} className="container">
    <CardTitle title="User Dashboard" subtitle='"My Favorite Pet App!"' />    
    <div className="col-sm-8"> 
     <List>
    <ListItem
    disabled={true}
    leftAvatar={<Avatar>{name[0]}</Avatar>}
    >
    {name}{email}{`${registered}`}
    </ListItem>  
  
     {secretData && <CardText>{secretData}{name}</CardText>}
        {Auth.isUserAuthenticated() ? (
      <ListItem>
      <Link to="/logout"><FlatButton label="Log Out"/></Link>
      </ListItem>
    ) : (null)}
    </List>
    </div>
  </Card>
  <Card style={homeCardStyle} className="container">
  <div>
  <h2>More Stuff</h2>
  {!registered ? (
  <NewClientFormPage/> ) : (null)} 
  </div>
  </Card>
  </div>
);
ClientDash.propTypes = {
  secretData: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  registered: PropTypes.bool.isRequired
};

export default ClientDash;







