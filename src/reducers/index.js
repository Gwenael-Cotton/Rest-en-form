import { combineReducers } from 'redux';

import auth from './auth';
import coachs from './coachs';
import coachings from './coachings';
import workouts from './workouts';
import getAllBookings from './getAllBookings';
import getAllUsers from './getAllUsers';
import healthCheck from './healthCheck';
import addWorkout from './addWorkout';
import bookingCoaching from './bookingCoaching';

const globalReducer = combineReducers({
  auth,
  coachs,
  coachings,
  workouts,
  getAllBookings,
  getAllUsers,
  healthCheck,
  addWorkout,
  bookingCoaching,
});

export default globalReducer;
