import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BookingCoaching from 'src/components/BookingCoaching';

import {
  setInputDateBookingCoachingValue,
  setInputSlotValue,
  bookingCoaching,
} from 'src/actions/coachings';

const mapStateToProps = (state) => ({
  startDate: state.bookingCoaching.date,
  selectedDate: state.bookingCoaching.selectedDate,
  errorMessage: state.bookingCoaching.errorMessageAvailableCoaching,
  successMessageBookingCoaching: state.bookingCoaching.successMessageBookingCoaching,
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (date) => {
    const action = setInputDateBookingCoachingValue(date);
    // console.log('setInputDateBookingCoachingValue', action);
    dispatch(action);
  },

  onChangeInputSlotValue: (value) => {
    const action = setInputSlotValue(value);
    // console.log('setInputSlotValue', action);
    dispatch(action);
  },

  onSubmitAddCoachingForm: () => {
    const action = bookingCoaching();
    // console.log('bookingCoaching', action);
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(BookingCoaching);

export default withRouter(container);
