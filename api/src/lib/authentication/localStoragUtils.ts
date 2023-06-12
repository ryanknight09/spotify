export const EXPIRATION_TIME = 3600 * 1000;

export const refreshToken = localStorage.getItem('refresh_token');

const setTokenTimestamp = () => {
  localStorage.setItem('spotify_token_timestamp', Date.now().toString());
};

export const setLocalAccessToken = (token: string) => {
  setTokenTimestamp();
  localStorage.setItem('access_token', token);
};

export const setLocalRefreshToken = (token: string) =>
  localStorage.setItem('refresh_token', token);

export const getTokenTimestamp = () =>
  parseInt(localStorage.getItem('spotify_token_timestamp') || '');

export const getLocalAccessToken = () => localStorage.getItem('access_token');
