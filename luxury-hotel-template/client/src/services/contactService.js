import { apiPost } from './api';

export const submitContactInquiry = async (payload) => {
  const response = await apiPost('/contact', payload);
  return response;
};
