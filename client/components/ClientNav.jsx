import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

import Auth from '../modules/Auth';

const defaultButtonStyle = {
    color: '#281004',
    backgroundColor: '#8E694B',
    display: 'inline',
    textAlign: 'center',
    padding: '0px',
    margin: '5px',
    verticleAlign: 'middle',
    borderRadius: '10px',
    height: 'auto',
    width: 'auto'

}

class ClientNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          shouldUpdate: false,
          user: {
              email: '',
              name: '',
              employee: '',
              registered: ''
          }
        }
    }
    shouldComponentUpdate(){
      return this.state.shouldUpdate;

    }
    componentDidMount() {
        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('post', '/auth/token');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                // success              
                // change the component-container state
                this.setState({
                    errors: {},
                    user: xhr.response.user_info.user
                });                
            } else {}
        });
        xhr.send();
        this.setState({
            shouldUpdate: true
        });
        console.log(this.state);
    }

    render() {
        return (
          <div>
          {this.state.user.employee ? (
            <div className="top-bar-right">
              <Link to="/logout"><FlatButton style={defaultButtonStyle} label="Log Out"/></Link>
              <Link to="/employee"><FlatButton style = {defaultButtonStyle} label="Dashboard"/>
              </Link>
              <Link to="/employee/jobboard"><FlatButton style = {defaultButtonStyle} label="Job List"/></Link>
            </div>
          ):(
          <div className="top-bar-right">
            <Link to="/logout"><FlatButton style={defaultButtonStyle} label="Log Out"/></Link>
            <Link to="/client"><FlatButton style = {defaultButtonStyle} label="Dashboard"/>
            </Link>
            <Link to="/client/service"><FlatButton style = {defaultButtonStyle} label="Schedule Service"/></Link>
          </div>
          )}
          </div>
        );
    }            

};
export default ClientNav;