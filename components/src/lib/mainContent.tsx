import { Box, Stack, styled } from '@mui/material';
import type { ReactNode } from 'react';

export const MainContent = ({
  bgcolor,
  children,
}: {
  bgcolor: string;
  children: ReactNode;
}) => (
  <MainContentWrapper>
    <BottomBackground bgcolor={bgcolor} />
    <BottomGradient />
    {children}
  </MainContentWrapper>
);

export const MainContentWrapper = styled(Stack)(() => ({
  maxWidth: '2000px',
  height: '100%',
  position: 'relative',
  padding: '1.5rem',
  paddingTop: '3rem',
}));

export const BottomBackground = styled(Box)(() => ({
  display: 'block',
  height: '14.5rem',
  minHeight: '14.5rem',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
}));

export const BottomGradient = styled(Box)(({ theme }) => ({
  display: 'block',
  height: '14.5rem',
  minHeight: '14.5rem',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  background: `linear-gradient(to bottom, rgba(10, 10, 10, .625), ${theme.palette.secondary[100]})`,
}));
