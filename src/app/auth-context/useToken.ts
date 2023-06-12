import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

export type useTokenResponse = {
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
};

export const tokenContextValues: useTokenResponse = {
  token: null,
  setToken: () => null,
};

export const useToken = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('access_token')
  );

  return { token, setToken };
};
