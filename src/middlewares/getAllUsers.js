import axios from 'axios';

import { GET_ALL_MEMBERS, saveAllMembers } from 'src/actions/allUsers';

const baseUrl = 'https://app-osport.herokuapp.com/api-v1';
const getAllMembers = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_MEMBERS: {
      const getAllMembersFromApi = async () => {
        try {
          const { token } = store.getState().auth.login;

          const response = await axios.get(`${baseUrl}/members`, {
            headers: {
              'content-type': 'application/json',
              Authorization: `bearer ${token}`,
            },
          });
          store.dispatch(saveAllMembers(response.data));
        }
        catch (error) {
          // console.log(error);
        }
      };
      getAllMembersFromApi();
      break;
    }
    default:
      next(action);
  }
};

export default getAllMembers;
