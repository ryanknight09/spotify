import axios from 'axios';
import type { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getLocalAccessToken } from './authentication/localStoragUtils';

interface ApiProviderProps {
  children: React.ReactNode;
  onError: ({ tokenExpired }: { tokenExpired: boolean }) => void;
}

const BASE_URL = 'https://api.spotify.com/v1';

export const ApiProvider: FC<ApiProviderProps> = ({ onError, children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: async ({ queryKey: [url] }) => {
          if (typeof url === 'string') {
            try {
              const response = await axios.get(`${BASE_URL}/${url}`, {
                headers: {
                  Authorization: `Bearer ${getLocalAccessToken()}`,
                  'Content-Type': 'application/json',
                },
              });
              return response.data;
            } catch (error: any) {
              if (error.response.status === (401 || 403))
                onError({ tokenExpired: true });

              throw new Error('Failed to fetch data');
            }
          }
          throw new Error('Invalid QueryKey');
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
