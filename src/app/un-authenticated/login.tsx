import type { FC } from 'react';

import { Button, Stack, Typography, styled } from '@mui/material';
import { useRedirectAuthCodeFlow } from '@spotify/api';
import { mainLogoGreen } from '@spotify/utils';

export const Login: FC = () => {
  const { redirect } = useRedirectAuthCodeFlow();

  return (
    <SxLoginWrapper>
      <SxMainLogo src={mainLogoGreen} alt="main logo" />
      <SxLoginButton onClick={redirect}>
        <Typography variant="h6">Log In</Typography>
      </SxLoginButton>
    </SxLoginWrapper>
  );
};

const SxLoginWrapper = styled(Stack)(() => ({
  height: 'inherit',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2em',
}));

const SxMainLogo = styled('img')(() => ({
  width: '65%',
  maxWidth: '35em',
}));

const SxLoginButton = styled(Button)(({ theme }) => ({
  height: '3em',
  width: '10.5rem',
  borderRadius: '500px',
  backgroundColor: theme.palette.common.white,
  touchAction: 'manipulation',
  color: theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: theme.palette.common.white,
  },
}));
