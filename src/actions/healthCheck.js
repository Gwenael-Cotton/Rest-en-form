// === Action Creator
export const GET_HEALTH_CHECK = 'GET_HEALTH_CHECK';
export const SAVE_HEALTH_CHECK = 'SAVE_HEALTH_CHECK';

// === Action types
export const getHealthCheck = (payload) => ({
  type: GET_HEALTH_CHECK,
  payload,
});

export const saveHealthCheck = (payload) => ({
  type: SAVE_HEALTH_CHECK,
  payload,
});
