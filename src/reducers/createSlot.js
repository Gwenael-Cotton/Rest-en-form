import {
  SET_INPUT_SLOT_DATE_VALUE,
  SET_INPUT_START_VALUE,
  SET_INPUT_END_VALUE,
  SET_INPUT_COACH_VALUE,
  SAVE_SLOT_FORM,
  SAVE_ERROR_SLOT_FORM,
} from 'src/actions/CreateSlotForm';

const initialState = {
  coachId: 0,
  selectedStart: '',
  selectedEnd: '',
  selectedDate: '',
  successMessageAddSlot: '',
  errorMessageAddSlot: '',
};

const createSlot = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_SLOT_DATE_VALUE:
      return {
        ...state,
        selectedDate: action.payload,
        successMessageAddSlot: '',
      };
    case SET_INPUT_START_VALUE:
      return {
        ...state,
        selectedStart: action.payload,
        successMessageAddSlot: '',
      };
    case SET_INPUT_END_VALUE:
      return {
        ...state,
        selectedEnd: action.payload,
        successMessageAddSlot: '',
      };
    case SET_INPUT_COACH_VALUE:
      return {
        ...state,
        coachId: action.payload,
        successMessageAddSlot: '',
      };
    case SAVE_SLOT_FORM:
      return {
        ...state,
        coachId: 0,
        selectedStart: '',
        selectedEnd: '',
        selectedDate: '',
        successMessageAddSlot: action.payload.message,
        errorMessageAddSlot: '',
      };
    case SAVE_ERROR_SLOT_FORM:
      return {
        ...state,
        errorMessageAddSlot: action.payload,
        successMessageAddSlot: '',
      };
    default:
      return state;
  }
};

export default createSlot;
