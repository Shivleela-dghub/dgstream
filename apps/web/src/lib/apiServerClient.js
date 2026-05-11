const API_SERVER_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const apiServerClient = {
  get: async (url) => {
    const res = await fetch(API_SERVER_URL + url, {
      method:  'GET',
      headers: getHeaders()
    });
    return handleResponse(res);
  },

  post: async (url, body) => {
    const isFormData = body instanceof FormData;
    const res = await fetch(API_SERVER_URL + url, {
      method:  'POST',
      headers: isFormData ? getAuthHeader() : getHeaders(),
      body:    isFormData ? body : JSON.stringify(body)
    });
    return handleResponse(res);
  },

  put: async (url, body) => {
    const isFormData = body instanceof FormData;
    const res = await fetch(API_SERVER_URL + url, {
      method:  'PUT',
      headers: isFormData ? getAuthHeader() : getHeaders(),
      body:    isFormData ? body : JSON.stringify(body)
    });
    return handleResponse(res);
  },

  delete: async (url) => {
    const res = await fetch(API_SERVER_URL + url, {
      method:  'DELETE',
      headers: getHeaders()
    });
    return handleResponse(res);
  }
};

const getToken = () => {
  if (typeof window !== 'undefined') return localStorage.getItem('adminToken');
  return null;
};

const getAuthHeader = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const getHeaders = () => ({
  'Content-Type': 'application/json',
  ...getAuthHeader()
});

const handleResponse = async (res) => {
  if (res.status === 401) {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin/login';
    return;
  }
  const data = await res.json();
  if (!res.ok) throw { response: { data } };
  return { data };
};

export default apiServerClient;
export { apiServerClient };