import { useEffect } from 'react';

import { ApiProvider, getToken } from '@spotify/api';
import { BrowserRouter } from 'react-router-dom';

import { useAuth } from './auth-context/authContext';
import { AuthenticatedRoutes } from './authenticated/authenticatedRoutes';
import Theme from './theme/theme';
import { UnAuthenticatedRoutes } from './un-authenticated/unAuthenticatedRoutes';

export function App() {
  const { token, setToken } = useAuth();

  useEffect(() => {
    const setNewToken = async () => {
      setToken(await getToken());
    };

    setNewToken();
  }, [setToken]);

  return (
    <Theme>
      <BrowserRouter>
        <ApiProvider
          onError={({ tokenExpired }) => tokenExpired && setToken(null)}
        >
          {token ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />}
        </ApiProvider>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
