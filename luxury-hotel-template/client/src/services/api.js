const resolveApiBaseUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL.replace(/\/$/, '');
  }

  if (typeof window !== 'undefined') {
    const { hostname, origin } = window.location;

    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:5000/api';
    }

    return origin + '/api';
  }

  return '/api';
};

const API_BASE_URL = resolveApiBaseUrl();

export const apiGet = async (path) => {
  const response = await fetch(API_BASE_URL + path);
  return response.json();
};

export const apiPost = async (path, payload) => {
  const response = await fetch(API_BASE_URL + path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return response.json();
};
