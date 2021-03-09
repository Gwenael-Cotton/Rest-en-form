import {
  SET_INPUT_MAIL_VALUE,
  SET_INPUT_PASSWORD_VALUE,
  SET_INPUT_NEW_PASSWORD_VALUE,
  SET_INPUT_CONFIRM_NEW_PASSWORD_VALUE,
  SAVE_MAIL,
} from 'src/actions/auth';

const initialState = {
  login: {
    email: 'sountidly@gmail.com',
    password: false,
    role: '',
  },
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_MAIL_VALUE:
      return {
        ...state,
        email: action.value,
      };
    case SAVE_MAIL:
      return {
        ...state,
        login: action.payload,
      };
    case SET_INPUT_PASSWORD_VALUE:
      return {
        ...state,
        password: action.value,
      };
    case SET_INPUT_NEW_PASSWORD_VALUE:
      return {
        ...state,
        newPassword: action.value,
      };
    case SET_INPUT_CONFIRM_NEW_PASSWORD_VALUE:
      return {
        ...state,
        confirmNewPassword: action.value,
      };
    default:
      return state;
  }
};

export default auth;
