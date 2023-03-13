import { SAVE_HEALTH_CHECK } from 'src/actions/healthCheck';

const initialState = {
  healthCheck: [
    {
      id: 0,
      workoutId: 0,
      workoutDate: '',
      memberId: 0,
      memberFirstname: '',
      memberLastname: '',
      weight: 0,
      muscleMass: 0,
      fatMass: 0,
      boneMass: 0,
      bodyWater: 0,
    },
  ],
};

const healthCheck = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_HEALTH_CHECK:
      return {
        ...state,
        healthCheck: action.payload,
      };
    default:
      return state;
  }
};

export default healthCheck;
