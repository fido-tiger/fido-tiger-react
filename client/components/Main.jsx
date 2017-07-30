import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Auth from '../modules/Auth';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { red900 } from 'material-ui/styles/colors';

import HomePage from './HomePage.jsx';
import ContactUsPage from '../containers/ContactUsPage.jsx';
import NewClientFormPage from '../containers/NewClientFormPage.jsx';
import ClientDashPage from '../containers/ClientDashPage.jsx';
import ServiceRequest from './ServiceRequest.jsx';
import DashboardPage from '../containers/DashboardPage.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';
// import ServiceFormPage from '../containers/ServiceFormPage.jsx';


/*
 ** ROUTE COMPONENTS
 ** components for subroutes 
 *****************************/
const clientRoutes = ({ routes }) => (
    <div>
    <h1> Client Routes </h1>
    </div>


)

/*
 ** ROUTES 
 **********************/
const routes = [{
        path: '/',
        exact: true,
        component: HomePage

    }, {
        path: '/client',
        exact: true,
        render: (location, callback) => {
            if (Auth.isUserAuthenticated()) {
                return (
                    <Redirect to={{pathname: '/client'}}/>
                );
            } else {
                return (
                    <Redirect to={{pathname: '/about'}}/>
                );
            }
        }
    }, {
        path: '/about',
        component: HomePage
    },
    {
        path: '/login',
        component: LoginPage
    }, {
        path: '/signup',
        component: SignUpPage
    },/*{
        path: '/newclient',
        component: NewClientFormPage
    },*/{
        path: '/contact',
        component: ContactUsPage
    }, {
        path: '/logout',
        render: (nextState, replace) => {
            Auth.deauthenticateUser();
            // change the current URL to /
            return (
                <Redirect to={{pathname: '/'}}/>
            );
        }
    }, {
        path: '/client',
        exact: true,
        component: ClientDashPage,
        routes: [{
            path: '/client/new',
            component: NewClientFormPage
        },{
            path: '/client/service',
            component: ServiceRequest
        }, {
            path: '/client/calendar',
            // component: ClientCalendar
        }, {
            path: '/client/profile',
            // component: Profile
        }]
    }, {
        path: '/client/service',
        component: ServiceRequest,
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
)
}
/>
)


/*
 ** CSS 
 **********************/
const homePaperStyle = {
    height: '100vh',
    width: '100%',
    margin: 0,
    textAlign: 'center',
    display: 'inline-block'
};

const defaultButtonStyle = {
 color:"black"
};

/*
** RENDER
***************************/
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{
                email: '',
                name: ''
            }
        }
    };

    render() {
        return (
            <div>
      <Card>
        <div className="top-bar">
          <div className="top-bar-left">
          <Link to={"/"}><FlatButton primary label="Fido and Tiger"/></Link>
          <Route path="/"/>
          </div>
          {Auth.isUserAuthenticated() ? (
            <div className="top-bar-right">
            <Link to="/logout"><FlatButton style={defaultButtonStyle} label="Log Out"/></Link>
            <Link to="/client"><FlatButton label="Dashboard"/>
            </Link><Link to="/client/service"><FlatButton label="Schedule Service"/></Link>
            </div>
          ) : (
            <div className="top-bar-right">
            <Link to="/login"><FlatButton label="Log In"/></Link>
            <Link to="/signup"><FlatButton label="Sign Up"/></Link>
            </div>
          )}
          <Link to="/contact"><FlatButton label="Contact Us"/></Link>
        </div>
              
    </Card>
    <div>
    <Paper style={homePaperStyle} zDepth={1}>
        {routes.map((route, i) => (
            <Route key={i} {...route}/>
          ))}
        <div>
        {clientRoutes}
        </div>
    </Paper>
    </div>  
      </div>
        );
    }
}

// Main.propTypes = {
//     children: PropTypes.object.isRequired
// };

export default Main;