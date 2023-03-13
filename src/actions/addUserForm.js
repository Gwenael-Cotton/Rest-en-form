export const SET_INPUT_FIRSTNAME_VALUE = 'SET_INPUT_FIRSTNAME_VALUE';
export const SET_INPUT_LASTNAME_VALUE = 'SET_INPUT_LASTNAME_VALUE';
export const SET_INPUT_MEMBER_ROLE_VALUE = 'SET_INPUT_MEMBER_ROLE_VALUE';
export const SET_INPUT_COACH_ROLE_VALUE = 'SET_INPUT_COACH_ROLE_VALUE';
export const SET_INPUT_SPECIALITY_VALUE = 'SET_INPUT_SPECIALITY_VALUE';
export const SET_INPUT_EMAIL_VALUE = 'SET_INPUT_EMAIL_VALUE';

export const GET_ALL_SPECIALITIES = 'GET_ALL_SPECIALITIES';
export const SAVE_ALL_SPECIALITIES = 'SAVE_ALL_SPECIALITIES';

export const SUBMIT_USER = 'SUBMIT_USER';

export const SAVE_USER_FORM = 'SAVE_USER_FORM';
export const SAVE_ERROR_USER_FORM = 'SAVE_ERROR_USER_FORM';

export const setInputFirstnameValue = (payload) => ({
  type: SET_INPUT_FIRSTNAME_VALUE,
  payload,
});

export const setInputLastnameValue = (payload) => ({
  type: SET_INPUT_LASTNAME_VALUE,
  payload,
});

export const setInputEmailValue = (payload) => ({
  type: SET_INPUT_EMAIL_VALUE,
  payload,
});

export const setInputMemberRoleValue = (payload) => ({
  type: SET_INPUT_MEMBER_ROLE_VALUE,
  payload,
});

export const setInputCoachRoleValue = (payload) => ({
  type: SET_INPUT_COACH_ROLE_VALUE,
  payload,
});

export const setInputSpecialityValue = (payload) => ({
  type: SET_INPUT_SPECIALITY_VALUE,
  payload,
});

export const getAllSpecialities = (payload) => ({
  type: GET_ALL_SPECIALITIES,
  payload,
});

export const saveAllSpecialities = (payload) => ({
  type: SAVE_ALL_SPECIALITIES,
  payload,
});

export const submitUser = () => ({
  type: SUBMIT_USER,
});

export const saveUserForm = (payload) => ({
  type: SAVE_USER_FORM,
  payload,
});

export const saveErrorUserForm = (payload) => ({
  type: SAVE_ERROR_USER_FORM,
  payload,
});
