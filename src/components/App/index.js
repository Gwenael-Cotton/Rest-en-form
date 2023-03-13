// == Import npm
import React, { useEffect } from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/containers/Header';
import Footer from 'src/containers/Footer';

import Auth from 'src/containers/Auth';
import NewPassword from 'src/containers/Auth/NewPassword';

import DashboardAdh from 'src/containers/DashboardAdh';
import DashboardManager from 'src/containers/DashboardManager';
import DashboardCoach from 'src/containers/DashboardCoach/DashboardCoach';

import Workouts from 'src/containers/Workouts/Workouts';
import AddWorkout from 'src/containers/AddWorkout';
import WorkoutsForCoach from 'src/containers/WorkoutsForCoach/WorkoutsForCoach';

import Coachings from 'src/containers/Coachings/Coachings';
import BookingCoaching from 'src/containers/BookingCoaching';

import Members from 'src/containers/GetAllMembers';
import Coachs from 'src/containers/GetCoachs/Coachs';
import Team from 'src/components/Team';

import './styles.scss';

// == Composant
const App = ({
  isLogged, role, appInit, isNewUser,
}) => {
  useEffect(appInit, []);

  return (
    <div className="app">
      <Header />
      {isLogged === false && (
      <Redirect to="/login" />
      )}
      <Switch>
        {role === 'MEMBER' && (
          <Redirect from="/login" to="/dashboard-member" />
        )}

        {role === 'COACH' && (
          <Redirect from="/login" to="/dashboard-coach" />
        )}

        {role === 'OWNER' && (
          <Redirect from="/login" to="/dashboard-manager" />
        )}
        <Redirect exact from="/" to="/login" />

        <Route path="/login" exact>
          <Auth />
        </Route>
        <Route
          exact
          path="/register"
        >
          <NewPassword />
        </Route>
        <Route
          path="/dashboard-member"
          exact
        >
          <DashboardAdh />
        </Route>

        <Route
          path="/dashboard-coach"
          exact
        >
          <DashboardCoach />
        </Route>

        <Route
          path="/dashboard-manager"
          exact
        >
          <DashboardManager />
        </Route>

        <Route
          exact
          path="/coachings"
        >
          <Coachings title="Prochains coachings" />
        </Route>

        <Route
          exact
          path="/booking-coaching"
        >
          <BookingCoaching />
        </Route>

        <Route exact path="/members">
          <Members />
        </Route>

        <Route
          exact
          path="/workout"
        >
          <Workouts title="Entraînements" />
        </Route>

        <Route
          exact
          path="/members/:id/workouts"
        >
          <WorkoutsForCoach />
        </Route>

        <Route
          exact
          path="/add-workout"
        >
          <AddWorkout />
        </Route>
        <Route
          exact
          path="/coachs"
        >
          <Coachs />
        </Route>
        <Route
          exact
          path="/team"
        >
          <Team />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Props Validation

App.propTypes = {
  isLogged: PropTypes.bool,
  role: PropTypes.string.isRequired,
  appInit: PropTypes.func.isRequired,
};

// == Export
export default App;
