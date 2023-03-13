// === Action Creator
export const GET_WORKOUTS = 'GET_WORKOUTS';
export const SAVE_WORKOUTS = 'SAVE_WORKOUTS';

export const SET_INPUT_DATE_VALUE = 'SET_INPUT_DATE_VALUE';
export const SET_INPUT_WEIGHT_VALUE = 'SET_INPUT_WEIGHT_VALUE ';
export const SET_INPUT_MUSCLE_MASS_VALUE = 'SET_INPUT_MUSCLE_MASS_VALUE';
export const SET_INPUT_FAT_MASS_VALUE = 'SET_INPUT_FAT_MASS_VALUE';
export const SET_INPUT_BONE_MASS_VALUE = 'SET_INPUT_BONE_MASS_VALUE';
export const SET_INPUT_BODY_WATER_VALUE = 'SET_INPUT_BODY_WATER_VALUE';
export const SET_INPUT_CONTENT_VALUE = 'SET_INPUT_CONTENT_VALUE';

export const ADD_WORKOUT = 'ADD_WORKOUT';
export const SAVE_WORKOUT = 'SAVE_WORKOUT';

export const GET_WORKOUTS_FOR_COACH = 'GET_WORKOUTS_FOR_COACH';
export const SAVE_WORKOUTS_FOR_COACH = 'SAVE_WORKOUTS_FOR_COACH';

export const SAVE_ERROR_WORKOUT = 'SAVE_ERROR_WORKOUT';

// === Action types
export const getWorkouts = (payload) => ({
  type: GET_WORKOUTS,
  payload,
});

export const saveWorkouts = (payload) => ({
  type: SAVE_WORKOUTS,
  payload,
});

export const setInputDateValue = (date) => ({
  type: SET_INPUT_DATE_VALUE,
  date,
});

export const setInputWeightValue = (payload) => ({
  type: SET_INPUT_WEIGHT_VALUE,
  payload,
});

export const setInputMuscleMassValue = (payload) => ({
  type: SET_INPUT_MUSCLE_MASS_VALUE,
  payload,
});

export const setInputFatMassValue = (payload) => ({
  type: SET_INPUT_FAT_MASS_VALUE,
  payload,
});

export const setInputBoneMassValue = (payload) => ({
  type: SET_INPUT_BONE_MASS_VALUE,
  payload,
});

export const setInputBodyWaterValue = (payload) => ({
  type: SET_INPUT_BODY_WATER_VALUE,
  payload,
});

export const setInputContentValue = (payload) => ({
  type: SET_INPUT_CONTENT_VALUE,
  payload,
});

export const addWorkout = () => ({
  type: ADD_WORKOUT,
});

export const saveWorkout = (payload) => ({
  type: SAVE_WORKOUT,
  payload,
});

export const getWorkoutsForCoach = (payload) => ({
  type: GET_WORKOUTS_FOR_COACH,
  payload,
});

export const saveWorkoutsForCoach = (payload) => ({
  type: SAVE_WORKOUTS_FOR_COACH,
  payload,
});

export const saveErrorWorkout = (payload) => ({
  type: SAVE_ERROR_WORKOUT,
  payload,
});
