// === Action Creator

export const GET_ALL_COACHS = 'GET_ALL_COACHS';
export const SAVE_COACHS = 'SAVE_COACHS';

// === Action types
export const getAllCoachs = (payload) => ({
  type: GET_ALL_COACHS,
  payload,
});

export const saveCoachs = (payload) => ({
  type: SAVE_COACHS,
  payload,
});
