import { apiGet } from './api';
import { testimonialCollection } from '../utils/roomData';

export const getReviews = async () => {
	try {
		const response = await apiGet('/reviews');
		return response.data || testimonialCollection;
	} catch (error) {
		return testimonialCollection;
	}
};
