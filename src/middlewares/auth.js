import axios from 'axios';

import { LOGIN, saveUser } from 'src/actions/auth';

const baseUrl = 'https://app-osport.herokuapp.com/api-v1';
const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const sendLoginToApi = async () => {
        try {
          const { email, password } = store.getState().auth;

          const userStringify = JSON.stringify({
            email,
            password,
          });

          const response = await axios.post(`${baseUrl}/login`, userStringify, {
            headers: {
              'content-type': 'application/json',
            },
          });
          console.log('sendLoginToApi', response.data);
          // stockage du token dans le localStorage (réutilisé dans le reducer)
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('logged', response.data.logged);
          store.dispatch(saveUser(response.data));
        }
        catch (error) {
          console.log(error);
        }
      };
      sendLoginToApi();
      break;
    }
    default:
      next(action);
  }
};

export default auth;
