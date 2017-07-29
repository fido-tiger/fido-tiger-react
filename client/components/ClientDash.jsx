import React from 'react';
import Auth from '../modules/Auth';
import PropTypes from 'prop-types';
import { Link, Route, Redirect } from 'react-router-dom';

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


const homeCardStyle = {
  width: '97%',
  margin:'15px',
  padding:'7px',
   textAlign: 'left',
};
const avatarStyle = {
  margin: '5px'
};

const ClientDash = ({data}) => (
  <div>
  <Card style={homeCardStyle} className="container">
    <CardTitle title="User Dashboard" subtitle='"My Favorite Pet App!"' />    
    <div className="col-sm-8">
     {data && <CardText>{data}</CardText>}
        {Auth.isUserAuthenticated() ? (
      <div className="top-bar-right">
      <Link to="/logout"><FlatButton label="Log Out"/></Link>
      </div>
    ) : (
      <div className="top-bar-right">
      <Link to="/login"><FlatButton label="Log In"/></Link>
      <Link to="/signup"><FlatButton label="Sign Up"/></Link>
      </div>
    )}
    </div>
  </Card>
  <Card style={homeCardStyle} className="container">
  <div>
  <h2>More Stuff</h2>
  <List>
    <ListItem
    disabled={true}
    leftAvatar={<Avatar>A</Avatar>}
    >
    Letter Avatar
    </ListItem>
    <ListItem
    disabled={true}
    leftAvatar={
    <Avatar
    color={deepOrange300}
    backgroundColor={purple500}
    size={30}
    style={avatarStyle}
    >
    A
    </Avatar>
    }
    >
    User Avatar
    </ListItem>
  </List>
  </div>
  </Card>
  </div>
);
ClientDash.propTypes = {
  data: PropTypes.string.isRequired
};

export default ClientDash;







