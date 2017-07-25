import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Auth from '../modules/Auth';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import HomePage from '../components/HomePage.jsx';
import DashboardPage from '../containers/DashboardPage.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';

const routes = [{
        path: '/',
        exact: true,
        component: HomePage
        // render: (location, callback) => {
        //     if (Auth.isUserAuthenticated()) {
        //         return(
        //      <div>{HomePage}</div>
        //      );
        //     } else {
        //       return(
        //         <Redirect to={{pathname: '/',component:{HomePage}}}/>
        //         );
        //     }
        // }
    },
    {
        path: '/login',
        component: LoginPage
    }, {
        path: '/signup',
        component: SignUpPage
    }, {
        path: '/logout',
        render: (nextState, replace) => {
            Auth.deauthenticateUser();
            // change the current URL to /
            return(
             <Redirect to={{pathname: '/'}}/>
             );
        }
    }, {
        path: '/client',
        // component: ClientDash,
        routes: [{
            path: '/client/service',
            // component: ServiceRequest
        }, {
            path: '/client/calendar',
            // component: ClientCalendar
        }, {
            path: '/client/profile',
            // component: Profile
        }]
    }, {
        path: '/employee',
        // component: EmployeeDash,
        routes: [{
            path: '/employee/schedule',
            // component: Schedule
        }, {
            path: '/employee/calendar',
            // component: EmployeeCalendar
        }, {
            path: '/employee/profile',
            // component: Profile
        }]
    }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
<Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
    )}
  />
)

class Main extends React.Component {
  render(){
    return(
    <div>
      <Card>
        <div className="top-bar">
          <div className="top-bar-left">
          <Link to={"/"}><FlatButton primary label="Fido and Tiger"/></Link>
          <Route path="/"/>
          </div>
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
    <Card>
        {routes.map((route, i) => (
            <Route key={i} {...route}/>
          ))}
      </Card>
      </div>
    );
  }
}

// Main.propTypes = {
//     children: PropTypes.object.isRequired
// };

export default Main;
