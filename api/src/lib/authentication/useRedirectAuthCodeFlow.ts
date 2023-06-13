const CLIENT_ID = 'b01c419b090040b58ca1ae2f9b9c6c18';
const REDIRECT_URL = 'http://localhost:4200/callback';
// const REDIRECT_URL = 'https://spotify-877d0.web.app/callback';

export const useRedirectAuthCodeFlow = () => {
  const redirect = async () => {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem('verifier', verifier);

    const scopes = [
      'user-read-private',
      'user-read-email',
      'user-library-read',
      'playlist-read-private',
      'playlist-read-collaborative',
      'user-top-read',
      'user-read-recently-played',
      'user-follow-read',
      'streaming',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-library-read',
      'user-library-modify',
    ];

    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      response_type: 'code',
      redirect_uri: REDIRECT_URL,
      scope: scopes.join(' '),
      code_challenge_method: 'S256',
      code_challenge: challenge,
    });

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

  return { redirect };
};

export const generateCodeVerifier = (length: number) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const generateCodeChallenge = async (codeVerifier: string) => {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};
