import React from 'react';
import ReactDom from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppCard } from 'material-ui/Card';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
  } from 'react-router-dom';

import routes from './componentRoutes.js';
import Main from './components/Main.jsx';
import HomePage from './components/HomePage.jsx';
import LoginForm from './components/LoginForm.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router basename="/">
    <div>
    <Route component={Main}/>
    </div>
    </Router>
  </MuiThemeProvider>), document.getElementById('app'));
