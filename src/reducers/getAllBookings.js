import { SAVE_NEXT_BOOKINGS } from 'src/actions/nextBookings';
import { SAVE_LAST_BOOKINGS } from 'src/actions/lastBookings';

const initialState = {
  nextBookings: [],
  lastBookings: [],
};

const getAllBookings = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_NEXT_BOOKINGS:
      return {
        ...state,
        nextBookings: action.payload,
      };
    case SAVE_LAST_BOOKINGS:
      return {
        ...state,
        lastBookings: action.payload,
      };
    default:
      return state;
  }
};

export default getAllBookings;
