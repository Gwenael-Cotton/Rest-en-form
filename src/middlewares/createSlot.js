import axios from 'axios';

import { format } from 'date-fns/esm';

import {
  ON_SUBMIT_SLOT_FORM,
  saveSlotForm,
  saveErrorSlotForm,
} from 'src/actions/CreateSlotForm';

const baseUrl = 'https://app-osport.herokuapp.com/api-v1';

const addSlot = (store) => (next) => (action) => {
  switch (action.type) {
    case ON_SUBMIT_SLOT_FORM: {
      const sendSlotToApi = async () => {
        try {
          const {
            selectedDate,
            selectedStart,
            selectedEnd,
            coachId,
          } = store.getState().createSlot;

          const { token } = store.getState().auth.login;

          const date = format(selectedDate, 'yyyy-MM-dd');
          const start = format(selectedStart, 'HH:mm');
          const end = format(selectedEnd, 'HH:mm');

          const addSlotStringify = JSON.stringify({
            date,
            start,
            end,
            coachId,
          });

          const response = await axios.post(`${baseUrl}/new-coachings`, addSlotStringify, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          console.log('sendSlotToApi => response.data', response.data);
          store.dispatch(saveSlotForm(response.data));
        }
        catch (error) {
          console.log('error.response', error.response);
          store.dispatch(saveErrorSlotForm(error.response.data.message));
        }
      };
      sendSlotToApi();
      break;
    }
    default:
      next(action);
  }
};

export default addSlot;
