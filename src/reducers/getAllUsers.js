import { SAVE_ALL_MEMBERS } from 'src/actions/allUsers';

const initialState = {
  allMembers: [],
};

const getAllUsers = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_MEMBERS:
      return {
        ...state,
        allMembers: action.payload,
      };
    default:
      return state;
  }
};

export default getAllUsers;
