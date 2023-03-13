import axios from 'axios';

import { ADD_WORKOUT, saveWorkout, saveErrorWorkout } from 'src/actions/workouts';

const baseUrl = 'https://app-osport.herokuapp.com/api-v1';

const addWorkout = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_WORKOUT: {
      const sendWorkoutToApi = async () => {
        try {
          const {
            date,
            weight,
            muscleMass,
            fatMass,
            boneMass,
            bodyWater,
            content,
          } = store.getState().addWorkout;

          const { token } = store.getState().auth.login;

          const addWorkoutStringify = JSON.stringify({
            date,
            weight,
            muscleMass,
            fatMass,
            boneMass,
            bodyWater,
            content,
          });

          const response = await axios.post(`${baseUrl}/new-workout`, addWorkoutStringify, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          console.log('sendWorkoutToApi => response.data', response.data);
          store.dispatch(saveWorkout(response.data));
        }
        catch (error) {
          console.log('error.response', error.response);
          store.dispatch(saveErrorWorkout(error.response.data.message));
        }
      };
      sendWorkoutToApi();
      break;
    }
    default:
      next(action);
  }
};

export default addWorkout;
