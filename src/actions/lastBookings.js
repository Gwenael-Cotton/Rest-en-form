export const GET_LAST_BOOKINGS = 'GET_LAST_BOOKINGS';
export const SAVE_LAST_BOOKINGS = 'SAVE_LAST_BOOKINGS';

export const getLastBookings = (payload) => ({
  type: 'GET_LAST_BOOKINGS',
  payload,
});

export const saveLastBookings = (payload) => ({
  type: 'SAVE_LAST_BOOKINGS',
  payload,
});
