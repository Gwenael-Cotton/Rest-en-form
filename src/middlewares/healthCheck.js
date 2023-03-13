import axios from 'axios';

import { GET_HEALTH_CHECK, saveHealthCheck } from 'src/actions/healthCheck';

const baseUrl = 'https://app-osport.herokuapp.com/api-v1';

const healthCheck = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_HEALTH_CHECK: {
      const getHealthCheckFromApi = async () => {
        try {
          const { token } = store.getState().auth.login;
          const response = await axios.get(`${baseUrl}/health`, {
            headers: {
              'content-type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          // console.log('getHealthCheckFromApi response.data', response.data);
          store.dispatch(saveHealthCheck(response.data));
        }
        catch (error) {
          // console.log(error);
        }
      };
      getHealthCheckFromApi();
      break;
    }
    default:
      next(action);
  }
};

export default healthCheck;
