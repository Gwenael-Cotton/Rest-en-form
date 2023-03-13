import { SAVE_COACHS } from 'src/actions/Coachs';

const initialState = {
  coachs: [],
};

const coachs = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COACHS:
      return {
        ...state,
        coachs: action.payload,
      };
    default:
      return state;
  }
};

export default coachs;
