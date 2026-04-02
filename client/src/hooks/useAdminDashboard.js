import { useEffect, useState } from 'react';
import { getDashboardAnalytics } from '../services/analyticsService';
import { getBookings } from '../services/bookingService';
import { getPayments } from '../services/paymentService';
import { getReviews } from '../services/reviewService';

const useAdminDashboard = () => {
  const [state, setState] = useState({
    loading: true,
    error: '',
    dashboard: null,
    bookings: [],
    payments: [],
    reviews: []
  });

  const load = async () => {
    setState((current) => ({ ...current, loading: true, error: '' }));

    try {
      const [dashboard, bookings, payments, reviews] = await Promise.all([
        getDashboardAnalytics(),
        getBookings(),
        getPayments(),
        getReviews()
      ]);

      setState({
        loading: false,
        error: '',
        dashboard,
        bookings,
        payments,
        reviews
      });
    } catch (error) {
      setState((current) => ({
        ...current,
        loading: false,
        error: error.message || 'Unable to load admin data.'
      }));
    }
  };

  useEffect(() => {
    load();
  }, []);

  return {
    ...state,
    reload: load
  };
};

export default useAdminDashboard;
