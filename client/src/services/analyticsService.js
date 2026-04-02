import { apiGet } from './api';
import { trackEvent } from '../utils/analytics';

export const captureCtaClick = (label) => trackEvent('cta_click', { label });

export const getDashboardAnalytics = async () => {
	const response = await apiGet('/analytics/dashboard');
	return response.data || {
		pageViews: 0,
		conversionRate: 0,
		averageBookingValue: 0,
		bookingRequestsToday: 0,
		revenueProjection: 0
	};
};
