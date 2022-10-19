export const getAccessToken = () => {
  return localStorage.getItem('access_token');
};

export const deleteAccessToken = () => {
  localStorage.removeItem('access_token');
};

export const setAccessToken = (token) => {
  localStorage.setItem('access_token', token);
};