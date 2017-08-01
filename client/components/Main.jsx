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
// import ServiceRequest from './ServiceRequest.jsx';
import DashboardPage from '../containers/DashboardPage.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';
import ServiceFormPage from '../containers/ServiceFormPage.jsx';

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
 ** ROUTE CONFIG 
 **********************/
const routes = [{
        path: '/',
        exact: true,
        component: HomePage

    }, {
        path: '/home',
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
    },{
        path: '/newclient',
        component: NewClientFormPage
    },{
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

        }, {
            path: '/client/service',

        },{
            // path: '/client/service',

        }, {
            path: '/client/service',

            // component: ServiceFormPage
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
        component: ServiceFormPage,
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
}

const barStyle = {
}


const defaultButtonStyle={
    color:'#281004',
    backgroundColor:'#8E694B',

    display: 'inline',
    textAlign: 'center',
    padding: '0px',
    margin: '5px',
    verticleAlign: 'middle',
    borderRadius: '10px',
    height: 'auto',
    width: 'auto'

}


/*
 ** RENDER
 ***************************/

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                name: '',
                employee: false
            }
        }
    }

    componentDidMount() {
        console.log(this.state);
    }


    render() {
        return (
            <div>
      <Card>
        <div style={barStyle} className="top-bar">
            {/*<img src="./images/FidoLogo.png" width="100%" height="auto"/>*/}

        <div className="top-bar">
            <img src="./images/FidoLogo.png" width="100%" height="auto"/>

=======

        <div style={barStyle} className="top-bar">
            {/*<img src="./images/FidoLogo.png" width="100%" height="auto"/>*/}

>>>>>>> 00c957e10664eae7d55fd8a58112d92787da6ac6
          <div className="top-bar-left">

            <Link to={"/"}><FlatButton primary style={defaultButtonStyle} label="Fido and Tiger"/></Link>
            <Route path="/"/>
            
            <Link to="/contact"><FlatButton style = {defaultButtonStyle} label="Contact Us"/></Link>
            <Link to="/newclient"><FlatButton style = {defaultButtonStyle} label="New Client Form"/></Link>

          </div>
          {Auth.isUserAuthenticated() ? (
            <div className="top-bar-right">
            <Link to="/logout"><FlatButton backgroundColor={red900} style={defaultButtonStyle} label="Log Out"/></Link>
            <Link to="/client"><FlatButton label="Dashboard"/></Link>
            <Link to="/client/service"><FlatButton label="Schedule Service"/></Link>
            <Link to="/logout"><FlatButton backgroundColor={red900} style={defaultButtonStyle} label="Log Out"/></Link>
            <Link to="/client"><FlatButton label="Dashboard"/>
            </Link><Link to="/client/service"><FlatButton label="Schedule Service"/></Link>
            <Link to="/logout"><FlatButton style={defaultButtonStyle} label="Log Out"/></Link>
            <Link to="/client"><FlatButton style = {defaultButtonStyle} label="Dashboard"/>
            </Link><Link to="/client/service"><FlatButton style = {defaultButtonStyle} label="Schedule Service"/></Link>

            <Link to="/logout"><FlatButton backgroundColor={red900} style={defaultButtonStyle} label="Log Out"/></Link>
            <Link to="/client"><FlatButton label="Dashboard"/></Link>
            <Link to="/client/service"><FlatButton label="Schedule Service"/></Link>


            <Link to="/logout"><FlatButton style={defaultButtonStyle} label="Log Out"/></Link>
            <Link to="/client"><FlatButton style = {defaultButtonStyle} label="Dashboard"/>
            </Link><Link to="/client/service"><FlatButton style = {defaultButtonStyle} label="Schedule Service"/></Link>
  
            </div>
          ) : (
            <div className="top-bar-right">
            <Link to="/login"><FlatButton style={defaultButtonStyle} label="Log In"/></Link>
            <Link to="/signup"><FlatButton style={defaultButtonStyle} label="Sign Up"/></Link>
            </div>
          )}
          
        </div>
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