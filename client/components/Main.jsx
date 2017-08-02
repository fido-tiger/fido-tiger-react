import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Auth from '../modules/Auth';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { red900 } from 'material-ui/styles/colors';

import HomePage from './HomePage.jsx';
import ClientNav from './ClientNav.jsx';
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
    },  {
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
    }, {
        path: '/client/service',
        component: ServiceFormPage,
    },{
        path: '/newclient',
        component: NewClientFormPage
    },{
        path: '/employee',
        exact: true,
        component: ClientDashPage
    },{
        path: '/employee/jobboard',
        component: ClientDashPage
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
    display: 'inline-block',
    backgroundColor:'#EDEBE9',

}

const barStyle = {}

const defaultButtonStyle = {
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
                employee: '',
                registered: ''
            }
        }
        this.ifUser = this.ifUser.bind(this);
    }

    ifUser(bool) {
        if (this.state.user.email !== '') {
            return true;
        } else {
            return false;
        }
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
                console.log(xhr);
                // change the component-container state
                this.setState({
                    errors: {},
                    user: xhr.response.user_info.user
                });

                console.log(this.state);
                
            } else {}
        });
        xhr.send();
 
    }


    render() {
        return (
            <div>
      <Card>

        <div style={barStyle} className="top-bar">
            {/*<img src="./images/FidoLogo.png" width="100%" height="auto"/>*/}

          <div className="top-bar-left">

            <Link to={"/"}><FlatButton primary style={defaultButtonStyle} label="Fido and Tiger"/></Link>
            <Route path="/"/>
            
            <Link to="/contact"><FlatButton style = {defaultButtonStyle} label="Contact Us"/></Link>
            <Link to="/newclient"><FlatButton style = {defaultButtonStyle} label="New Client Form"/></Link>
            
          </div>
          {Auth.isUserAuthenticated() ? (
                <ClientNav
                user={this.state.user}
                shouldUpdate={this.state.updateClientNav}
                />
          ) : (
            <div className="top-bar-right">
            <Link to="/login"><FlatButton style={defaultButtonStyle} label="Log In"/></Link>
            <Link to="/signup"><FlatButton style={defaultButtonStyle} label="Sign Up"/></Link>
            </div>
          )}
          
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
Main.contextTypes = {
    router: PropTypes.object.isRequired
};


export default Main;