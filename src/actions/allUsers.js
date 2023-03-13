export const GET_ALL_MEMBERS = 'GET_ALL_MEMBERS';
export const SAVE_ALL_MEMBERS = 'SAVE_ALL_MEMBERS';

export const getAllMembers = (payload) => ({
  type: 'GET_ALL_MEMBERS',
  payload,
});

export const saveAllMembers = (payload) => ({
  type: 'SAVE_ALL_MEMBERS',
  payload,
});
