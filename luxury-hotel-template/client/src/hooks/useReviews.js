import { useEffect, useState } from 'react';
import { getReviews } from '../services/reviewService';

const useReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then(setReviews);
  }, []);

  return reviews;
};

export default useReviews;
