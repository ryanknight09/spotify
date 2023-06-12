import type { FC } from 'react';

import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const UnAuthenticatedLayout: FC = () => (
  <SxLayoutWrappper>
    <Outlet />
  </SxLayoutWrappper>
);

export const SxLayoutWrappper = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100vw',
  backgroundColor: theme.palette.secondary[100],
}));
