import type { FC, PropsWithChildren } from 'react';
import { createContext, useContext, useMemo } from 'react';

import type { useTokenResponse } from './useToken';
import { tokenContextValues, useToken } from './useToken';

const AuthContext = createContext<useTokenResponse>({
  ...tokenContextValues,
});

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const useTokenMethods = useToken();

  const memoizedAuthUserMethods = useMemo(
    () => useTokenMethods,
    [useTokenMethods]
  );

  return (
    <AuthContext.Provider value={memoizedAuthUserMethods}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      'AuthContext can only be used in an AuthContextContextProvider'
    );
  }
  return context;
};
