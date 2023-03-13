export const SET_INPUT_SLOT_DATE_VALUE = 'SET_INPUT_SLOT_DATE_VALUE';
export const SET_INPUT_START_VALUE = 'SET_INPUT_START_VALUE';
export const SET_INPUT_END_VALUE = 'SET_INPUT_END_VALUE';
export const SET_INPUT_COACH_VALUE = 'SET_INPUT_COACH_VALUE';
export const ON_SUBMIT_SLOT_FORM = 'ON_SUBMIT_SLOT_FORM';
export const SAVE_SLOT_FORM = 'SAVE_SLOT_FORM';
export const SAVE_ERROR_SLOT_FORM = 'SAVE_ERROR_SLOT_FORM';

export const setInputSlotDateValue = (payload) => ({
  type: SET_INPUT_SLOT_DATE_VALUE,
  payload,
});

export const setInputStartValue = (payload) => ({
  type: SET_INPUT_START_VALUE,
  payload,
});

export const setInputEndValue = (payload) => ({
  type: SET_INPUT_END_VALUE,
  payload,
});

export const setInputCoachValue = (payload) => ({
  type: SET_INPUT_COACH_VALUE,
  payload,
});

export const onSubmitSlotForm = () => ({
  type: ON_SUBMIT_SLOT_FORM,
});

export const saveSlotForm = (payload) => ({
  type: SAVE_SLOT_FORM,
  payload,
});

export const saveErrorSlotForm = (payload) => ({
  type: SAVE_ERROR_SLOT_FORM,
  payload,
});
