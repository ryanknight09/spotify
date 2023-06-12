import {
  EXPIRATION_TIME,
  getLocalAccessToken,
  getTokenTimestamp,
  setLocalAccessToken,
} from './localStoragUtils';

const CLIENT_ID = 'b01c419b090040b58ca1ae2f9b9c6c18';
const REDIRECT_URL = 'http://localhost:4200/callback';

export const getToken = async (code?: string) => {
  const localToken = getLocalAccessToken();

  if (Date.now() - getTokenTimestamp() > EXPIRATION_TIME) {
    console.warn('Access token has expired, logging out...');
    localStorage.clear();
  }

  if (!localToken && code) {
    const verifier = localStorage.getItem('verifier') || '';

    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URL,
      code_verifier: verifier,
    });

    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });

    const { access_token } = await result.json();

    setLocalAccessToken(access_token);

    return access_token || null;
  }

  return localToken;
};
