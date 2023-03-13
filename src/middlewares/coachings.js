import axios from 'axios';

import { GET_COACHINGS, saveCoachings } from 'src/actions/coachings';

const baseUrl = 'https://app-osport.herokuapp.com/api-v1';

const getCoachings = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_COACHINGS: {
      const getCoachingsFromApi = async () => {
        try {
          const { token } = store.getState().auth.login;
          const response = await axios.get(`${baseUrl}/member-next-bookings`, {
            headers: {
              'content-type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          // console.log('getCoachingsFromApi response.data', response.data);
          store.dispatch(saveCoachings(response.data));
        }
        catch (error) {
          // console.log(error);
        }
      };
      getCoachingsFromApi();
      break;
    }
    default:
      next(action);
  }
};

export default getCoachings;
