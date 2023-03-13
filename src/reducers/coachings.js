import { SAVE_COACHINGS } from 'src/actions/coachings';

const initialState = {
  coachings: [
    {
      id: 0,
      startTime: '',
      endTime: '',
      coachId: 0,
      coachFirstname: '',
      coachLastname: '',
      memberId: 0,
      createdAt: '',
      updatedAt: null,
      memberFirstname: '',
      memberLastname: '',
    },
  ],

};

const coachings = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COACHINGS:
      return {
        ...state,
        coachings: action.payload,
      };
    default:
      return state;
  }
};

export default coachings;
