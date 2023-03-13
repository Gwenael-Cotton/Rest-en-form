import {
  SET_INPUT_MAIL_VALUE,
  SET_INPUT_PASSWORD_VALUE,
  SAVE_USER,
  SAVE_ERROR_USER,
  LOGOUT,
  SET_INPUT_NEW_PASSWORD_VALUE,
  SET_INPUT_CONFIRM_NEW_PASSWORD_VALUE,
  SAVE_NEW_USER,
  SAVE_ERROR_NEW_USER,
} from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  login: {
    role: '',
    // utilisation du token récupéré par la requete de login
    token: localStorage.getItem('token'),
    message: '',
  },
  createPassword: {
    password: '',
    confirm: '',
    token: '',
  },
  successMessageSaveNewUser: '',
  errorMessageSaveNewUser: '',
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_MAIL_VALUE:
      return {
        ...state,
        email: action.payload,
        password: state.password,
      };
    case SET_INPUT_PASSWORD_VALUE:
      return {
        ...state,
        email: state.email,
        password: action.payload,
      };
    case SAVE_USER:
      return {
        ...state,
        email: state.email,
        password: state.password,
        login: {
          role: action.payload.role,
          logged: action.payload.logged,
          token: localStorage.getItem('token'),
          message: action.payload.message,
        },
      };
    case SAVE_ERROR_USER:
      return {
        ...state,
        message: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        message: '',
        email: '',
        password: '',
        login: {
          role: '',
          logged: false,
          token: localStorage.removeItem('token'),
        },
      };
    case SET_INPUT_NEW_PASSWORD_VALUE:
      return {
        ...state,
        createPassword: {
          password: action.payload,
          confirm: state.createPassword.confirm,
        },
      };
    case SET_INPUT_CONFIRM_NEW_PASSWORD_VALUE:
      return {
        ...state,
        createPassword: {
          password: state.createPassword.password,
          confirm: action.payload,
        },
      };
    case SAVE_NEW_USER:
      return {
        ...state,
        createPassword: {
          password: '',
          confirm: '',
        },
        login: {
          role: '',
          logged: false,
          token: '',
        },
        successMessageSaveNewUser: action.payload.message,
        errorMessageSaveNewUser: '',
      };
    case SAVE_ERROR_NEW_USER:
      return {
        ...state,
        errorMessageSaveNewUser: action.payload,
        successMessageSaveNewUser: '',
      };
    default:
      return state;
  }
};

export default auth;
