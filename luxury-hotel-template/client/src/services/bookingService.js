import { apiGet, apiPost } from './api';

export const submitBooking = (payload) => apiPost('/bookings', payload);
export const requestAvailability = (payload) => apiPost('/availability/check', payload);
export const getBookings = async () => {
	const response = await apiGet('/bookings');
	return response.data || [];
};
