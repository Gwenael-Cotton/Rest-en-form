import axios from 'axios';

import { format } from 'date-fns/esm';

import {
  SET_INPUT_DATE_BOOKING_COACHING_VALUE,
  saveAvailableCoachings,
  BOOKING_COACHING,
  saveBookingCoaching,
  saveErrorAvailableCoachings,
} from 'src/actions/coachings';

const baseUrl = 'https://app-osport.herokuapp.com/api-v1';

const bookingCoaching = (store) => (next) => (action) => {
  switch (action.type) {
    case SET_INPUT_DATE_BOOKING_COACHING_VALUE: {
      const getAvaiblableCoachingsFromApi = async () => {
        try {
          const { token } = store.getState().auth.login;

          const dateToString = format(action.date, 'yyyy-MM-dd');

          const response = await axios.get(`${baseUrl}/available-coachings?date=${dateToString}`, {
            headers: {
              'content-type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          console.log('getAvaiblableCoachingsFromApi => response.data', response.data);
          store.dispatch(saveAvailableCoachings(response.data));
        }
        catch (error) {
          console.log(error.response.data.message);
          store.dispatch(saveErrorAvailableCoachings(error.response.data.message));
        }
      };
      getAvaiblableCoachingsFromApi();
      break;
    }
    case BOOKING_COACHING: {
      const setSelectedSlotToApi = async () => {
        try {
          const { token } = store.getState().auth.login;
          const { coachingId } = store.getState().bookingCoaching;

          // console.log('coachingId', coachingId);

          const idStringify = JSON.stringify({
            coachingId,
          });

          const response = await axios.patch(`${baseUrl}/book-coaching`, idStringify, {
            headers: {
              'content-type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          console.log('setSelectedSlotToApi => response.data', response.data);
          store.dispatch(saveBookingCoaching(response.data));
        }
        catch (error) {
          console.log(error.response);
        }
      };
      setSelectedSlotToApi();
      break;
    }
    default:
      next(action);
  }
};

export default bookingCoaching;
