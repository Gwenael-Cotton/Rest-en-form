import {
  SET_INPUT_DATE_VALUE,
  SET_INPUT_WEIGHT_VALUE,
  SET_INPUT_MUSCLE_MASS_VALUE,
  SET_INPUT_FAT_MASS_VALUE,
  SET_INPUT_BONE_MASS_VALUE,
  SET_INPUT_BODY_WATER_VALUE,
  SET_INPUT_CONTENT_VALUE,
  SAVE_WORKOUT,
  SAVE_ERROR_WORKOUT,
} from 'src/actions/workouts';

const initialState = {
  date: '',
  weight: null,
  muscleMass: null,
  fatMass: null,
  boneMass: null,
  bodyWater: null,
  content: '',
  succesMessageAddWorkout: '',
  errorMessageAddWorkout: '',
};

const addWorkout = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_DATE_VALUE:
      return {
        ...state,
        date: action.date,
        succesMessageAddWorkout: '',
        errorMessageAddWorkout: '',
      };
    case SET_INPUT_WEIGHT_VALUE:
      return {
        ...state,
        weight: action.payload,
        succesMessageAddWorkout: '',
      };
    case SET_INPUT_MUSCLE_MASS_VALUE:
      return {
        ...state,
        muscleMass: action.payload,
        succesMessageAddWorkout: '',
      };
    case SET_INPUT_FAT_MASS_VALUE:
      return {
        ...state,
        fatMass: action.payload,
        succesMessageAddWorkout: '',
      };
    case SET_INPUT_BONE_MASS_VALUE:
      return {
        ...state,
        boneMass: action.payload,
        succesMessageAddWorkout: '',
      };
    case SET_INPUT_BODY_WATER_VALUE:
      return {
        ...state,
        bodyWater: action.payload,
        succesMessageAddWorkout: '',
      };
    case SET_INPUT_CONTENT_VALUE:
      return {
        ...state,
        content: action.payload,
        succesMessageAddWorkout: '',
      };
    case SAVE_WORKOUT:
      return {
        ...state,
        date: '',
        weight: 0,
        muscleMass: 0,
        fatMass: 0,
        boneMass: 0,
        bodyWater: 0,
        content: '',
        succesMessageAddWorkout: action.payload.message,
        errorMessageAddWorkout: '',
      };
    case SAVE_ERROR_WORKOUT:
      return {
        ...state,
        errorMessageAddWorkout: action.payload,
        succesMessageAddWorkout: '',
      };
    default:
      return state;
  }
};

export default addWorkout;
