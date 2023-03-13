export const GET_NEXT_BOOKINGS = 'GET_NEXT_BOOKINGS';
export const SAVE_NEXT_BOOKINGS = 'SAVE_NEXT_BOOKINGS';

export const getNextBookings = (payload) => ({
  type: 'GET_NEXT_BOOKINGS',
  payload,
});

export const saveNextBookings = (payload) => ({
  type: 'SAVE_NEXT_BOOKINGS',
  payload,
});
