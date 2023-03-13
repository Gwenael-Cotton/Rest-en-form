import { SAVE_WORKOUTS, SAVE_WORKOUTS_FOR_COACH } from 'src/actions/workouts';

const initialState = {
  workouts: [
    {
      id: 0,
      date: '',
      description: '',
      createdAt: '',
      updatedAt: null,
      memberId: 0,
      memberFirstname: '',
      memberLastname: '',
      weight: 0,
      muscleMass: 0,
      fatMass: 0,
      boneMass: 0,
      bodyWater: 0,
      commentCoachId: null,
      commentCoachFirstname: null,
      commentCoachLastname: null,
      commentContent: null,
      commentDate: null,
    },
  ],
  workoutsForCoach: [
    {
      id: 0,
      date: '',
      description: '',
      createdAt: '',
      updatedAt: null,
      memberId: 0,
      memberFirstname: '',
      memberLastname: '',
      weight: 0,
      muscleMass: 0,
      fatMass: 0,
      boneMass: 0,
      bodyWater: 0,
      commentCoachId: null,
      commentCoachFirstname: null,
      commentCoachLastname: null,
      commentContent: null,
      commentDate: null,
    },
  ],
};

const workouts = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_WORKOUTS:
      return {
        ...state,
        workouts: action.payload,
      };
    case SAVE_WORKOUTS_FOR_COACH:
      return {
        ...state,
        workoutsForCoach: action.payload,
      };
    default:
      return state;
  }
};

export default workouts;
