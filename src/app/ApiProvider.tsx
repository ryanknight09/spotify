import type { FC } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

interface ApiProviderProps {
  children: React.ReactNode;
}

export const ApiProvider: FC<ApiProviderProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
