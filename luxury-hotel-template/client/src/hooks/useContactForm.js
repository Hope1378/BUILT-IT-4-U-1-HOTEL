import { useState } from 'react';
import useForm from './useForm';
import { submitContactInquiry } from '../services/contactService';

const initialState = {
  name: '',
  email: '',
  phone: '',
  topic: 'concierge',
  message: ''
};

const useContactForm = () => {
  const { values, setValues, handleChange } = useForm(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await submitContactInquiry(values);
      if (!response.success) {
        throw new Error((response.errors && response.errors[0]) || response.message || 'Unable to send enquiry.');
      }
      setSubmitted(true);
      setValues(initialState);
    } catch (requestError) {
      setError(requestError.message || 'Unable to send enquiry.');
    } finally {
      setSubmitting(false);
    }
  };

  return {
    values,
    handleChange,
    submitting,
    submitted,
    error,
    submit
  };
};

export default useContactForm;
