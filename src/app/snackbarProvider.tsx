/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react';
import { createRef } from 'react';

import type { CloseReason, SnackbarKey } from 'notistack';
import { SnackbarProvider as NotistackProvider } from 'notistack';

interface SnackbarProviderProps {
  children: React.ReactNode;
}

export const SnackbarProvider: FC<SnackbarProviderProps> = ({ children }) => {
  const notistackRef = createRef<NotistackProvider>();

  const onClickAway = () => (_event: any, reason: CloseReason, key: SnackbarKey) => {
    if (reason === 'clickaway') {
      notistackRef.current?.closeSnackbar(key);
    }
  };

  return (
    <NotistackProvider ref={notistackRef} onClick={onClickAway}>
      {children}
    </NotistackProvider>
  );
};
