import { Box, styled } from '@mui/material';
import type { ReactNode } from 'react';

export const HeroSection = ({
  bgcolor,
  children,
}: {
  bgcolor: string;
  children: ReactNode;
}) => {
  return (
    <HeroWrapper>
      <Background bgcolor={bgcolor} />
      <Gradient />
      {children}
    </HeroWrapper>
  );
};

const borderRadius = {
  borderTopLeftRadius: '.5rem',
  borderTopRightRadius: '.5rem',
};

export const HeroWrapper = styled(Box)(() => ({
  height: '22rem',
  minHeight: '22rem',
  padding: '0 1.5rem',
  paddingBottom: '1.5rem',
  position: 'relative',
  ...borderRadius,
}));

export const Background = styled(Box)(() => ({
  display: 'block',
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  ...borderRadius,
}));

export const Gradient = styled(Box)(() => ({
  display: 'block',
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  background: `linear-gradient(transparent 0, rgba(10, 10, 10, .55) 100%)`,
  ...borderRadius,
}));
