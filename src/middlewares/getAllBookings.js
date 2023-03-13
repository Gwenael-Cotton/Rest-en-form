import axios from 'axios';

import { GET_NEXT_BOOKINGS, saveNextBookings } from 'src/actions/nextBookings';
import { GET_LAST_BOOKINGS, saveLastBookings } from 'src/actions/lastBookings';

const baseUrl = 'https://app-osport.herokuapp.com/api-v1';
const getNextBookings = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_NEXT_BOOKINGS: {
      const getNextBookingsFromApi = async () => {
        try {
          const { token } = store.getState().auth.login;

          const response = await axios.get(`${baseUrl}/coach-next-bookings`, {
            headers: {
              'content-type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          store.dispatch(saveNextBookings(response.data));
        }
        catch (error) {
          // console.log(error);
        }
      };
      getNextBookingsFromApi();
      break;
    }
    case GET_LAST_BOOKINGS: {
      const getLastBookingsFromApi = async () => {
        try {
          const { token } = store.getState().auth.login;

          const response = await axios.get(`${baseUrl}/coach-last-bookings`, {
            headers: {
              'content-type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          store.dispatch(saveLastBookings(response.data));
        }
        catch (error) {
          // console.log(error);
        }
      };
      getLastBookingsFromApi();
      break;
    }
    default:
      next(action);
  }
};

export default getNextBookings;
