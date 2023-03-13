import {
  SET_INPUT_FIRSTNAME_VALUE,
  SET_INPUT_LASTNAME_VALUE,
  SET_INPUT_MEMBER_ROLE_VALUE,
  SET_INPUT_COACH_ROLE_VALUE,
  SET_INPUT_SPECIALITY_VALUE,
  SET_INPUT_EMAIL_VALUE,
  SAVE_ALL_SPECIALITIES,
  SAVE_USER_FORM,
  SAVE_ERROR_USER_FORM,
} from 'src/actions/addUserForm';

const initialState = {
  checked: false,
  firstname: '',
  lastname: '',
  email: '',
  role: '',
  checkboxSpecialities: [],
  specialties: [],
  speciality: [
    {
      id: 0,
      name: '',
      createdAt: '',
      updatedAt: null,
    },
  ],
  successMessageAddUser: '',
  detailsSuccessAddUser: {},
  errorMessageAddUser: '',
  isNewUser: false,
};

const addUser = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_FIRSTNAME_VALUE:
      return {
        ...state,
        firstname: action.payload,
        successMessageAddUser: '',
      };
    case SET_INPUT_LASTNAME_VALUE:
      return {
        ...state,
        lastname: action.payload,
        successMessageAddUser: '',
      };
    case SET_INPUT_EMAIL_VALUE:
      return {
        ...state,
        email: action.payload,
        successMessageAddUser: '',
      };
    case SET_INPUT_MEMBER_ROLE_VALUE:
      return {
        ...state,
        checked: false,
        role: 'MEMBER',
        successMessageAddUser: '',
      };
    case SET_INPUT_COACH_ROLE_VALUE:
      return {
        ...state,
        checked: false,
        role: 'COACH',
        successMessageAddUser: '',
      };
    case SET_INPUT_SPECIALITY_VALUE:
      return {
        ...state,
        checkboxSpecialities: [
          state.specialties.push(Number(action.payload)),
        ],
        successMessageAddUser: '',
      };
    case SAVE_ALL_SPECIALITIES:
      return {
        ...state,
        speciality: action.payload,
      };
    case SAVE_USER_FORM:
      return {
        ...state,
        checked: false,
        firstname: '',
        lastname: '',
        email: '',
        role: '',
        checkboxSpecialities: [],
        specialties: [],
        successMessageAddUser: action.payload.message,
        detailsSuccessAddUser: action.payload.newUser,
        errorMessageAddUser: '',
        isNewUser: true,
      };
    case SAVE_ERROR_USER_FORM:
      return {
        ...state,
        errorMessageAddUser: action.payload,
        successMessageAddUser: '',
        detailsSuccessAddUser: '',
      };
    default:
      return state;
  }
};

export default addUser;
