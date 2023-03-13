import axios from 'axios';

import {
  SUBMIT_USER,
  GET_ALL_SPECIALITIES,
  saveUserForm,
  saveAllSpecialities,
  saveErrorUserForm,
} from 'src/actions/addUserForm';

const baseUrl = 'https://app-osport.herokuapp.com/api-v1';

const addUser = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_USER: {
      const sendUserToApi = async () => {
        try {
          const {
            firstname,
            lastname,
            email,
            role,
            specialties,
          } = store.getState().addUser;

          const { token } = store.getState().auth.login;

          const addUserStringify = JSON.stringify({
            firstname,
            lastname,
            email,
            role,
            specialties,
          });

          const response = await axios.post(`${baseUrl}/new-user`, addUserStringify, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          console.log('sendUserToApi => response.data', response.data);
          store.dispatch(saveUserForm(response.data));
        }
        catch (error) {
          console.log('saveErrorUserForm => error.response', error.response);
          store.dispatch(saveErrorUserForm(error.response.data.message));
        }
      };
      sendUserToApi();
      break;
    }
    case GET_ALL_SPECIALITIES: {
      const getAllSpecialitiesfromApi = async () => {
        try {
          const { token } = store.getState().auth.login;

          const response = await axios.get(`${baseUrl}/specialties`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          // console.log('getAllSpecialitiesfromApi => response.data', response.data);
          store.dispatch(saveAllSpecialities(response.data));
        }
        catch (error) {
          console.log('error.response', error.response);
        }
      };
      getAllSpecialitiesfromApi();
      break;
    }
    default:
      next(action);
  }
};

export default addUser;
