import type { FC } from 'react';

import { Box, Stack, styled } from '@mui/material';
import { NavigationButtons } from '@spotify/components';
import { TracksContextProvider } from '@spotify/utils';
import { Outlet } from 'react-router-dom';

import { Player } from './player';
import { SideBar } from './sidebar/sidebar';

export const AuthenticatedAppLayout: FC = () => (
  <TracksContextProvider>
    <SxStack>
      <SxAppLayoutWrapper>
        <SideBar />
        <SxOutletWrapper>
          <NavigationButtons />
          <Outlet />
        </SxOutletWrapper>
      </SxAppLayoutWrapper>
      <Player />
    </SxStack>
  </TracksContextProvider>
);

const SxStack = styled(Stack)(({ theme }) => ({
  height: '100vh',
  width: '100vw',
  backgroundColor: theme.palette.secondary.main,
}));

const SxAppLayoutWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  gap: '.5rem',
  padding: '.5rem',
  backgroundColor: theme.palette.secondary.main,
  overflowX: 'auto',
}));

const SxOutletWrapper = styled('main')(({ theme }) => ({
  backgroundColor: theme.palette.secondary[100],
  borderRadius: '.5rem',
  flexGrow: 1,
  overflow: 'hidden',
  minWidth: '28rem',
  position: 'relative',
}));
