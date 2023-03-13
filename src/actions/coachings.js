// === Action Creator
export const GET_COACHINGS = 'GET_COACHINGS';
export const SAVE_COACHINGS = 'SAVE_COACHINGS';

export const SET_INPUT_DATE_BOOKING_COACHING_VALUE = 'SET_INPUT_DATE_BOOKING_COACHING_VALUE';
export const GET_AVAILABLE_COACHINGS_TO_A_DATE = 'GET_AVAILABLE_COACHINGS_TO_A_DATE';
export const SAVE_AVAILABLE_COACHINGS = 'SAVE_AVAILABLE_COACHINGS';

export const SET_INPUT_SLOT_VALUE = 'SET_INPUT_SLOT_VALUE';
export const BOOKING_COACHING = 'BOOKING_COACHING';
export const SAVE_BOOKING_COACHING = 'SAVE_BOOKING_COACHING';

export const SAVE_ERROR_AVAILABLE_COACHING = 'SAVE_ERROR_AVAILABLE_COACHING';

// === Action types
export const getCoachings = (payload) => ({
  type: GET_COACHINGS,
  payload,
});

export const saveCoachings = (payload) => ({
  type: SAVE_COACHINGS,
  payload,
});

export const setInputDateBookingCoachingValue = (date) => ({
  type: SET_INPUT_DATE_BOOKING_COACHING_VALUE,
  date,
});

export const getAvailableCoachingsToADate = (payload) => ({
  type: GET_AVAILABLE_COACHINGS_TO_A_DATE,
  payload,
});

export const saveAvailableCoachings = (payload) => ({
  type: SAVE_AVAILABLE_COACHINGS,
  payload,
});

export const setInputSlotValue = (coachingId) => ({
  type: SET_INPUT_SLOT_VALUE,
  coachingId,
});

export const bookingCoaching = () => ({
  type: BOOKING_COACHING,
});

export const saveBookingCoaching = (payload) => ({
  type: SAVE_BOOKING_COACHING,
  payload,
});

export const saveErrorAvailableCoachings = (payload) => ({
  type: SAVE_ERROR_AVAILABLE_COACHING,
  payload,
});
