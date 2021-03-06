import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import HomePage from '../HomePage/HomePage';
import DataReporting from '../DataReporting/DataReporting';
import NewOrganization from '../NewOrganization/NewOrganization';
import OrganizationsListPage from '../OrganizationsListPage/OrganizationsListPage';
import ContactsListPage from '../ContactsList/ContactsListPage';
import NewEvent from '../NewEvent/NewEvent';
import VolunteerEvent from '../VolunteerEvent/VolunteerEvent'
import registerPage from '../RegisterPage/RegisterPage';
import EditEvents from '../EditEvents/EditEvents';
import Nav from '../Nav/Nav';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_USER'
    })
  }

  render() {
    return (
      <Router>
        {/* <div> */}
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
          
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={HomePage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/registerPage"
              component={registerPage}
            />
            <ProtectedRoute
              exact
              path="/contactsListPage"
              component={ContactsListPage}
            />
            <ProtectedRoute
              exact
              path="/organizationsListPage"
              component={OrganizationsListPage}
            />
            <ProtectedRoute
              exact
              path="/Event"
              component={NewEvent}
            />
            <ProtectedRoute
              exact
              path="/newOrganization"
              component={NewOrganization}
            />
            <ProtectedRoute
              exact
              path="/organizationsListPage"
              component={OrganizationsListPage}
            />
            <ProtectedRoute
              exact
              path="/VolunteerEvent"
              component={VolunteerEvent}
            />
            <ProtectedRoute
              exact
              path="/editEvents"
              component={EditEvents}
            />
            <DataReporting
              exact
              path="/dataReporting"
              component={DataReporting}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          
        {/* </div> */}
      </Router>
    )
  }
}

export default connect()(App);
